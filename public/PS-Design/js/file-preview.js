// ==================== Configuration ====================

const CONFIG = {
  BASE_URL: baseUrl,
  LOADING_GIF_PATH: "/images/searching.gif",
  MODAL_ID: "IframeViewer",
  FILE_ID_INPUT_ID: "previewFileId",
  FILE_TYPE_INPUT_ID: "previewFileType",
  FILE_NAME_DISPLAY_ID: "previewFileName",
  PREVIEW_MIN_HEIGHT: "700px",
  MAX_FILE_SIZE: 40 * 1024 * 1024, // 40MB
  FETCH_TIMEOUT: 30000, // 30 seconds
  ALLOWED_MIME_TYPES: new Set([
    "application/pdf",
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/svg+xml",
    "audio/mpeg",
    "audio/mp3",
    "audio/wav",
    "audio/ogg",
    "audio/webm",
  ]),
};

CONFIG.LOADING_GIF_URL = `${CONFIG.BASE_URL}${CONFIG.LOADING_GIF_PATH}`;

// ==================== Custom Error Classes ====================
class FilePreviewError extends Error {
  constructor(message, code, context = {}) {
    super(message);
    this.name = "FilePreviewError";
    this.code = code;
    this.context = context;
    this.timestamp = new Date().toISOString();
  }
}

// ==================== Utility Functions ====================
class FileUtils {
  /**
   * Validates and sanitizes text content
   */
  static sanitizeText(text) {
    if (!text) return "";
    const temp = document.createElement("div");
    temp.textContent = String(text).substring(0, 255); // Limit length
    return temp.textContent;
  }

  /**
   * Validates MIME type against whitelist
   */
  static validateContentType(contentType) {
    if (!contentType) return false;
    const baseType = contentType.toLowerCase().split(";")[0].trim();
    return CONFIG.ALLOWED_MIME_TYPES.has(baseType);
  }

  /**
   * Checks if content type is audio
   */
  static isAudioFile(contentType) {
    return contentType && /^audio\//i.test(contentType);
  }

  /**
   * Checks if content type is image
   */
  static isImageFile(contentType) {
    return contentType && /^image\//i.test(contentType);
  }

  /**
   * Checks if content type is PDF
   */
  static isPDFFile(contentType) {
    return contentType && /^application\/pdf/i.test(contentType);
  }

  /**
   * Validates base64 string and checks for PDF signature
   */
  static isBase64PDF(base64String) {
    if (typeof base64String !== "string" || !base64String) return false;

    const cleanedBase64 = base64String.replace(
      /^data:application\/pdf;base64,/,
      "",
    );

    try {
      const binaryString = atob(cleanedBase64.substring(0, 100));
      return binaryString.startsWith("%PDF");
    } catch (e) {
      console.warn("Invalid base64 string during PDF check:", e);
      return false;
    }
  }

  /**
   * Efficiently converts base64 to Blob with size validation
   */
  static base64ToBlob(base64String, contentType) {
    if (!base64String) {
      return new Blob([], { type: contentType || "application/octet-stream" });
    }

    const parts = base64String.split("base64,");
    const cleanedBase64 = parts.length > 1 ? parts[1] : base64String;

    // Estimate and validate size before conversion
    const estimatedSize = Math.ceil(cleanedBase64.length * 0.75);
    if (estimatedSize > CONFIG.MAX_FILE_SIZE) {
      throw new FilePreviewError(
        `حجم الملف كبير جداً (${(estimatedSize / 1024 / 1024).toFixed(2)} MB)`,
        "FILE_TOO_LARGE",
        { size: estimatedSize, maxSize: CONFIG.MAX_FILE_SIZE },
      );
    }

    try {
      const byteCharacters = atob(cleanedBase64);
      const byteNumbers = new Uint8Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      return new Blob([byteNumbers], { type: contentType });
    } catch (e) {
      throw new FilePreviewError("فشل تحويل محتوى الملف", "CONVERSION_ERROR", {
        originalError: e.message,
      });
    }
  }

  /**
   * Creates data URL with validation
   */
  static createDataURL(fileContent, contentType) {
    if (!fileContent) return "";
    if (fileContent.startsWith("data:")) return fileContent;

    const validatedType = this.validateContentType(contentType)
      ? contentType
      : "application/octet-stream";

    return `data:${validatedType};base64,${fileContent}`;
  }

  /**
   * Checks if value is numeric string
   */
  static isNumericString(value) {
    return (
      typeof value === "string" && value.trim() !== "" && !isNaN(Number(value))
    );
  }

  /**
   * Checks if string is valid JSON
   */
  static isJsonString(value) {
    if (typeof value !== "string" || value.trim().length === 0) return false;
    const trimmed = value.trim();
    return (
      (trimmed.startsWith("{") && trimmed.endsWith("}")) ||
      (trimmed.startsWith("[") && trimmed.endsWith("]"))
    );
  }

  /**
   * Parses JSON safely
   */
  static safeJsonParse(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (e) {
      throw new FilePreviewError("بيانات JSON غير صالحة", "INVALID_JSON", {
        originalError: e.message,
      });
    }
  }
}

// ==================== PDF Scroll Manager ====================
class PDFScrollManager {
  constructor() {
    this.scrollContainer = null;
    this.isEnabled = false;
    this.touchStartY = 0;
    this.touchStartX = 0;

    this._handleWheel = this._handleWheel.bind(this);
    this._handleTouchStart = this._handleTouchStart.bind(this);
    this._handleTouchMove = this._handleTouchMove.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  /**
   * Finds scrollable parent element
   */
  _findScrollableParent(element) {
    if (!element) return document.scrollingElement || document.documentElement;

    let parent = element;
    while (
      parent &&
      parent !== document.body &&
      parent !== document.documentElement
    ) {
      const style = getComputedStyle(parent);
      const overflowY = style.overflowY;
      const isScrollable =
        (overflowY === "auto" || overflowY === "scroll") &&
        parent.scrollHeight > parent.clientHeight;

      if (isScrollable) return parent;
      parent = parent.parentElement;
    }

    return document.scrollingElement || document.documentElement;
  }

  /**
   * Enables scroll handling for PDF container
   */
  enable(container) {
    if (this.isEnabled) this.disable();

    if (!container) return;

    this.scrollContainer = this._findScrollableParent(container);
    this.isEnabled = true;

    // Attach event listeners
    container.addEventListener("wheel", this._handleWheel, { passive: false });
    container.addEventListener("touchstart", this._handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchmove", this._handleTouchMove, {
      passive: false,
    });
    document.addEventListener("keydown", this._handleKeyDown);

    // Prevent context menu on container
    container.addEventListener("contextmenu", (e) => e.preventDefault());
  }

  /**
   * Disables scroll handling
   */
  disable() {
    if (!this.isEnabled) return;

    this.isEnabled = false;
    document.removeEventListener("keydown", this._handleKeyDown);
    this.scrollContainer = null;
  }

  _handleWheel(e) {
    if (!this.isEnabled || !this.scrollContainer) return;

    this.scrollContainer.scrollTop += e.deltaY;
    this.scrollContainer.scrollLeft += e.deltaX;
    e.preventDefault();
  }

  _handleTouchStart(e) {
    if (!this.isEnabled || !e.touches || !e.touches.length) return;

    this.touchStartY = e.touches[0].clientY;
    this.touchStartX = e.touches[0].clientX;
  }

  _handleTouchMove(e) {
    if (
      !this.isEnabled ||
      !e.touches ||
      !e.touches.length ||
      !this.scrollContainer
    )
      return;

    const currentY = e.touches[0].clientY;
    const currentX = e.touches[0].clientX;
    const deltaY = this.touchStartY - currentY;
    const deltaX = this.touchStartX - currentX;

    this.scrollContainer.scrollTop += deltaY;
    this.scrollContainer.scrollLeft += deltaX;

    this.touchStartY = currentY;
    this.touchStartX = currentX;

    e.preventDefault();
  }

  _handleKeyDown(e) {
    if (!this.isEnabled || !this.scrollContainer) return;

    const keyScrollMap = {
      ArrowDown: 40,
      ArrowUp: -40,
      PageDown: 400,
      PageUp: -400,
      " ": 400,
    };

    if (keyScrollMap[e.key] !== undefined) {
      this.scrollContainer.scrollTop += keyScrollMap[e.key];
      e.preventDefault();
      e.stopPropagation();
    }
  }
}

// ==================== Main File Preview Manager ====================
class FilePreviewManager {
  constructor(config) {
    this.config = config;
    this.currentBlobUrl = null;
    this.abortController = null;
    this.pdfScrollManager = new PDFScrollManager();

    // Cache DOM elements
    this.$modal = $(`#${config.MODAL_ID}`);
    this.elements = {
      loader: document.getElementById("previewLoader"),
      filePreviewContainer: document.getElementById("filePreviewContainer"),
      noPreview: document.getElementById("noPreview"),
      previewControls: document.getElementById("previewControls"),
      previewFileName: document.getElementById(config.FILE_NAME_DISPLAY_ID),
      downloadPreviewBtn: document.getElementById("downloadPreviewBtn"),
      openInNewTabBtn: document.getElementById("openInNewTabBtn"),
      fileIdInput: document.getElementById(config.FILE_ID_INPUT_ID),
      fileTypeInput: document.getElementById(config.FILE_TYPE_INPUT_ID),
    };

    this._validateElements();
    this._bindEvents();
  }

  /**
   * Validates required DOM elements exist
   */
  _validateElements() {
    const required = [
      "loader",
      "filePreviewContainer",
      "noPreview",
      "previewControls",
    ];
    const missing = required.filter((key) => !this.elements[key]);

    if (missing.length > 0) {
      console.error("Missing required elements:", missing);
      throw new FilePreviewError(
        "Required DOM elements not found",
        "MISSING_ELEMENTS",
        { missing },
      );
    }
  }

  /**
   * Binds event listeners
   */
  _bindEvents() {
    this.$modal.on("hidden.bs.modal", () => this._onModalHidden());
    this.$modal.on("show.bs.modal", () => this._onModalShow());

    if (this.elements.downloadPreviewBtn) {
      this.elements.downloadPreviewBtn.addEventListener("click", () =>
        this._handleDownload(),
      );
    }

    if (this.elements.openInNewTabBtn) {
      this.elements.openInNewTabBtn.addEventListener("click", () =>
        this._handleOpenInNewTab(),
      );
    }
  }

  /**
   * Handles modal hidden event
   */
  _onModalHidden() {
    this._cancelPendingOperations();
    this.pdfScrollManager.disable();
    this._revokeBlobUrl();
    this._resetUI();
  }

  /**
   * Handles modal show event
   */
  async _onModalShow() {
    this._resetUI();
    this._showLoader();

    const fileIdValue = this.elements.fileIdInput?.value;
    const fileType = this.elements.fileTypeInput?.value || "";

    if (!fileIdValue) {
      this._showError("لم يتم تحديد ملف للمعاينة", "NO_FILE_ID");
      return;
    }

    try {
      let fileData = null;

      if (FileUtils.isNumericString(fileIdValue)) {
        const handler = this.elements.fileIdInput.classList.contains("KAMN")
          ? "PreviewKAmnFile"
          : "PreviewFile";
        fileData = await this._fetchFileFromServer(
          fileIdValue,
          fileType,
          handler,
        );
      } else if (FileUtils.isJsonString(fileIdValue)) {
        fileData = this._parseFileObject(fileIdValue);
      } else {
        throw new FilePreviewError("معرف الملف غير صالح", "INVALID_FILE_ID", {
          fileId: fileIdValue,
        });
      }

      if (!fileData) {
        throw new FilePreviewError(
          "لم يتم العثور على بيانات الملف",
          "NO_FILE_DATA",
        );
      }

      await this._displayFile(fileData);
    } catch (error) {
      this._handleError(error);
    } finally {
      this._hideLoader();
    }
  }

  /**
   * Cancels any pending fetch operations
   */
  _cancelPendingOperations() {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
  }

  /**
   * Resets UI to initial state
   */
  _resetUI() {
    this.elements.filePreviewContainer.style.display = "none";
    this.elements.filePreviewContainer.textContent = "";
    this.elements.noPreview.style.display = "none";
    this.elements.noPreview.textContent =
      "لا يوجد معاينة لهذا النوع من الملفات.";
    this.elements.previewControls.style.display = "none";

    if (this.elements.previewFileName) {
      this.elements.previewFileName.textContent = "";
    }

    if (this.elements.downloadPreviewBtn) {
      this.elements.downloadPreviewBtn.style.display = "block";
    }

    if (this.elements.openInNewTabBtn) {
      this.elements.openInNewTabBtn.style.display = "block";
    }
  }

  /**
   * Shows loading indicator
   */
  _showLoader() {
    if (this.elements.loader) {
      this.elements.loader.style.display = "block";
      this.elements.downloadPreviewBtn.style.display = "none";
      this.elements.openInNewTabBtn.style.display = "none";
    }
  }

  /**
   * Hides loading indicator
   */
  _hideLoader() {
    if (this.elements.loader) {
      this.elements.loader.style.display = "none";
    }
  }

  /**
   * Manages blob URL lifecycle
   */
  _setBlobUrl(url) {
    if (this.currentBlobUrl && this.currentBlobUrl !== url) {
      try {
        URL.revokeObjectURL(this.currentBlobUrl);
      } catch (e) {
        console.warn("Failed to revoke blob URL:", e);
      }
    }
    this.currentBlobUrl = url;
  }

  /**
   * Revokes current blob URL
   */
  _revokeBlobUrl() {
    if (this.currentBlobUrl) {
      try {
        URL.revokeObjectURL(this.currentBlobUrl);
      } catch (e) {
        console.warn("Failed to revoke blob URL:", e);
      }
      this.currentBlobUrl = null;
    }
  }

  /**
   * Fetches file from server with timeout and abort support
   */
  async _fetchFileFromServer(fileId, fileType, handler) {
    this._cancelPendingOperations();
    this.abortController = new AbortController();

    const url = `${
      this.config.BASE_URL
    }/index?handler=${handler}&fileId=${encodeURIComponent(
      fileId,
    )}&type=${encodeURIComponent(fileType)}`;

    const timeoutId = setTimeout(() => {
      this.abortController.abort();
    }, CONFIG.FETCH_TIMEOUT);

    try {
      const response = await fetch(url, {
        signal: this.abortController.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        throw new FilePreviewError(
          `فشل تحميل الملف (${response.status})`,
          "FETCH_ERROR",
          { status: response.status, details: errorText.substring(0, 200) },
        );
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);

      if (error.name === "AbortError") {
        throw new FilePreviewError("انتهت مهلة تحميل الملف", "TIMEOUT", {
          timeout: CONFIG.FETCH_TIMEOUT,
        });
      }

      throw error;
    }
  }

  /**
   * Parses file object from JSON string
   */
  _parseFileObject(jsonString) {
    const parsedObj = FileUtils.safeJsonParse(jsonString);

    let fileToPreview = null;

    if (Array.isArray(parsedObj)) {
      if (parsedObj.length === 0) {
        throw new FilePreviewError("المصفوفة فارغة", "EMPTY_ARRAY");
      }
      fileToPreview = parsedObj[parsedObj.length - 1];
    } else if (typeof parsedObj === "object" && parsedObj !== null) {
      fileToPreview = parsedObj;
    } else {
      throw new FilePreviewError("تنسيق بيانات غير صالح", "INVALID_FORMAT");
    }

    return fileToPreview;
  }

  /**
   * Displays file content based on type
   */
  async _displayFile(fileData) {
    const {
      fileName = "file",
      contentType = "application/octet-stream",
      fileContent = "",
      props = {},
    } = fileData;

    const { CanDownload = true, CanPrint = true, Title = fileName } = props;

    debugger;
    // Sanitize and display filename
    if (this.elements.previewFileName) {
      this.elements.previewFileName.textContent =
        FileUtils.sanitizeText(fileName);
    }

    // Set button visibility
    if (this.elements.downloadPreviewBtn) {
      this.elements.downloadPreviewBtn.style.display = CanDownload
        ? "block"
        : "none";
    }
    if (this.elements.openInNewTabBtn) {
      this.elements.openInNewTabBtn.style.display = CanPrint ? "block" : "none";
    }

    // Validate content type
    if (!FileUtils.validateContentType(contentType)) {
      console.warn("Potentially unsafe content type:", contentType);
    }

    let blobUrl = null;
    let previewSuccess = false;

    try {
      // Handle different file types
      if (
        FileUtils.isBase64PDF(fileContent) ||
        FileUtils.isPDFFile(contentType)
      ) {
        blobUrl = await this._displayPDF(fileContent, fileName);
        previewSuccess = true;
      } else if (FileUtils.isImageFile(contentType)) {
        blobUrl = this._displayImage(fileContent, contentType, fileName);
        previewSuccess = true;
      } else if (FileUtils.isAudioFile(contentType)) {
        blobUrl = this._displayAudio(fileContent, contentType);
        previewSuccess = true;
      } else {
        // Unsupported file type
        this._showNoPreview();
        // Still allow download if content exists
        if (fileContent) {
          blobUrl = URL.createObjectURL(
            FileUtils.base64ToBlob(fileContent, contentType),
          );
          this._setBlobUrl(blobUrl);
        }
      }

      if (previewSuccess) {
        this.elements.filePreviewContainer.style.display = "block";
        this.elements.previewControls.style.display = "flex";
      }

      // Wire download/open controls
      this._wireControls(
        blobUrl,
        fileName,
        Title,
        CanDownload,
        CanPrint,
        contentType,
      );
    } catch (error) {
      throw new FilePreviewError("فشل عرض الملف", "DISPLAY_ERROR", {
        originalError: error.message,
        contentType,
      });
    }
  }

  /**
   * Displays PDF using object tag and adds an overlay to block right-click/context menu
   */
  async _displayPDF(fileContent, fileName) {
    const blob = FileUtils.base64ToBlob(fileContent, "application/pdf");
    const blobUrl = URL.createObjectURL(blob);
    this._setBlobUrl(blobUrl);

    const object = document.createElement("object");
    object.id = "pdfObject";
    object.type = "application/pdf";
    object.data = blobUrl + "#toolbar=0"; // hide toolbar if supported
    object.style.cssText = `
    width: 100%;
    user-select: none;
    height: ${this.config.PREVIEW_MIN_HEIGHT};
    border: none;
    display: block;
  `;
    object.setAttribute("aria-label", FileUtils.sanitizeText(fileName));

    // Make sure the container is positioned so the overlay can be absolutely positioned
    const container = this.elements.filePreviewContainer;
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }

    // Create transparent overlay to capture right-clicks and other pointer events
    const overlay = document.createElement("div");
    overlay.id = "pdfObjectOverlay";
    overlay.style.cssText = `
    position: absolute;
    inset: 0;                /* top:0; right:0; bottom:0; left:0; */
    z-index: 9999;          /* above the object */
    cursor: default;
    user-select: none;
    margin-left: 15px;
     margin-right: 15px;
    -webkit-user-select: none;
    background: transparent; /* transparent so it looks like nothing changed */
    /* keep pointer events enabled so overlay receives clicks */
    pointer-events: auto;
  `;

    // Event handlers — prevent context menu and block right-button mouse events
    const preventMenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      // Optional feedback (uncomment):
      // console.log('context menu blocked on PDF overlay');
    };

    const blockRightButton = (e) => {
      if (e.button === 2) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Touch/long-press protection (some mobile browsers / PDF viewers)
    let touchTimer = null;
    const touchStart = (e) => {
      // start timer to block long-press that may open context options
      touchTimer = setTimeout(() => {
        // synthesize a preventDefault action
      }, 600);
    };
    const touchEnd = (e) => {
      if (touchTimer) {
        clearTimeout(touchTimer);
        touchTimer = null;
      }
    };

    // Attach listeners with capture to try to intercept before browser/pdf viewer
    overlay.addEventListener("contextmenu", preventMenu, {
      capture: true,
      passive: false,
    });
    overlay.addEventListener("mousedown", blockRightButton, {
      capture: true,
      passive: false,
    });
    overlay.addEventListener("mouseup", blockRightButton, {
      capture: true,
      passive: false,
    });
    overlay.addEventListener("touchstart", touchStart, {
      capture: true,
      passive: true,
    });
    overlay.addEventListener("touchend", touchEnd, {
      capture: true,
      passive: true,
    });

    // Append object and overlay
    container.appendChild(object);
    // add overlay after object so it visually sits on top
    container.appendChild(overlay);

    // Save references so you can remove overlay later if you need to allow right-click (e.g. on download)
    this._currentPdfObject = object;
    this._currentPdfOverlay = overlay;

    // Enable scroll handling for PDF (if overlay interferes with scroll, you can forward wheel events)
    this.pdfScrollManager.enable(this.elements.filePreviewContainer);

    return blobUrl;
  }

  /**
   * Displays image
   */
  _displayImage(fileContent, contentType, fileName) {
    const dataUrl = FileUtils.createDataURL(fileContent, contentType);

    const img = document.createElement("img");
    img.id = "previewImage";
    img.src = dataUrl;
    img.alt = FileUtils.sanitizeText(fileName) || "صورة المرفق";
    img.style.cssText = `
            max-width: 100%;
            max-height: ${this.config.PREVIEW_MIN_HEIGHT};
            object-fit: contain;
            display: block;
            margin: auto;
        `;

    // Add error handler
    img.onerror = () => {
      this._showError("فشل تحميل الصورة", "IMAGE_LOAD_ERROR");
    };

    this.elements.filePreviewContainer.appendChild(img);

    return dataUrl;
  }

  /**
   * Displays audio player
   */
  _displayAudio(fileContent, contentType) {
    const dataUrl = FileUtils.createDataURL(fileContent, contentType);

    const audio = document.createElement("audio");
    audio.id = "previewAudio";
    audio.controls = true;
    audio.src = dataUrl;
    audio.style.cssText = "width: 100%; padding: 1rem;";

    // Add error handler
    audio.onerror = () => {
      this._showError("فشل تحميل الملف الصوتي", "AUDIO_LOAD_ERROR");
    };

    this.elements.filePreviewContainer.appendChild(audio);

    return dataUrl;
  }

  /**
   * Shows no preview message
   */
  _showNoPreview() {
    this.elements.noPreview.style.display = "block";
    this.elements.noPreview.textContent =
      "لا يوجد معاينة لهذا النوع من الملفات.";
  }

  /**
   * Wires download and open controls
   */
  _wireControls(url, filename, title, canDownload, canPrint, contentType) {
    if (!url) return;

    this.contentType = contentType;
    this.currentDownloadUrl = url;
    this.currentFilename = filename;
    this.currentTitle = title;
    this.canDownload = canDownload;
    this.canPrint = canPrint;
  }

  /**
   * Handles download action
   */
  async _handleDownload() {
    if (!this.currentDownloadUrl || !this.canDownload) return;

    try {
      // Log download on server
      const logUrl = `${
        this.config.BASE_URL
      }/index?handler=DownloadFile&title=${encodeURIComponent(
        this.currentTitle || this.currentFilename,
      )}`;
      await fetch(logUrl, { method: "GET" }).catch((e) => {
        console.warn("Failed to log download:", e);
      });

      // Trigger download
      const a = document.createElement("a");
      a.href = this.currentDownloadUrl;
      a.download = FileUtils.sanitizeText(this.currentFilename);
      document.body.appendChild(a);
      a.click();
      a.remove();

      filePreviewManagerInstance.$modal.modal("hide");
    } catch (error) {
      console.error("Download error:", error);
      alert("حدث خطأ أثناء تحميل الملف.");
    }
  }

  /**
   * Handles open in new tab action
   */
  async _handleOpenInNewTab() {
    if (!this.currentDownloadUrl || !this.canPrint) return;

    try {
      // Log print/view on server
      const logUrl = `${
        this.config.BASE_URL
      }/index?handler=PrintFile&title=${encodeURIComponent(
        this.currentTitle || this.currentFilename,
      )}`;
      await fetch(logUrl, { method: "GET" }).catch((e) => {
        console.warn("Failed to log print:", e);
      });

      printFile({
        fileData: this.currentDownloadUrl,
        mimeType: this.contentType,
        fileName: this.currentFilename,
      });

      debugger;
      filePreviewManagerInstance.$modal.modal("hide");
    } catch (error) {
      console.error("Open in new tab error:", error);
      alert("حدث خطأ أثناء فتح الملف في علامة تبويب جديدة.");
    }
  }

  /**
   * Shows error message
   */
  _showError(message, code) {
    console.error(`FilePreviewError [${code}]:`, message);

    this.elements.noPreview.textContent = `خطأ: ${message}`;
    this.elements.noPreview.style.display = "block";

    if (this.elements.previewFileName) {
      this.elements.previewFileName.textContent = "خطأ في تحميل المرفق";
    }
  }

  /**
   * Handles errors with proper formatting
   */
  _handleError(error) {
    if (error instanceof FilePreviewError) {
      this._showError(error.message, error.code);
      console.error("FilePreviewError context:", error.context);
    } else {
      this._showError(error.message || "حدث خطأ غير متوقع", "UNKNOWN_ERROR");
      console.error("Unexpected error:", error);
    }
  }
}

// ==================== Global API Functions ====================
let filePreviewManagerInstance = null;

/**
 * Initializes the manager (singleton pattern)
 */
function _initFilePreviewManager() {
  if (!filePreviewManagerInstance) {
    try {
      filePreviewManagerInstance = new FilePreviewManager(CONFIG);
    } catch (error) {
      console.error("Failed to initialize FilePreviewManager:", error);
      throw error;
    }
  }
}

/**
 * Opens preview modal with async file data fetcher
 */
async function previewModalByGetFileFunction(getFileFunction) {
  _initFilePreviewManager();

  if (typeof getFileFunction !== "function") {
    console.error("previewModalByGetFileFunction requires a function argument");
    alert("خطأ في تهيئة المعاينة.");
    return;
  }

  try {
    const fileData = await getFileFunction();
    const objToString = JSON.stringify(fileData);

    filePreviewManagerInstance.elements.fileIdInput.value = objToString;
    filePreviewManagerInstance.elements.fileTypeInput.value = "";
    filePreviewManagerInstance.elements.fileIdInput.classList.remove("KAMN");
    filePreviewManagerInstance.$modal.modal("show");
  } catch (error) {
    console.error("Error in previewModalByGetFileFunction:", error);
    alert(`فشل إعداد المعاينة: ${error.message || "حدث خطأ غير متوقع."}`);
  }
}

/**
 * Opens preview modal with file ID or object
 */
function previewModal(id, type = 0) {
  _initFilePreviewManager();

  const idValue =
    typeof id === "object" && id !== null ? JSON.stringify(id) : String(id);

  filePreviewManagerInstance.elements.fileIdInput.value = idValue;
  filePreviewManagerInstance.elements.fileTypeInput.value = String(type);
  filePreviewManagerInstance.elements.fileIdInput.classList.remove("KAMN");
  filePreviewManagerInstance.$modal.modal("show");
}

/**
 * Opens the preview modal for "KAMN" specific files, which use a different server handler.
 * @param {number} id - The file ID (must be a number for KAMN handler).
 * @param {number} [type=0] - An optional type parameter.
 */
function previewKAmnModal(id, type = 0) {
  _initFilePreviewManager();
  // For KAMN, 'id' is expected to be a numeric file ID.
  if (!FileUtils.isNumericString(String(id))) {
    console.error(
      "Invalid ID provided for previewKAmnModal. Expected a numeric ID.",
    );
    alert("معرف الملف غير صالح لمعاينة KAMN.");
    return;
  }
  filePreviewManagerInstance.elements.fileIdInput.value = String(id);
  filePreviewManagerInstance.elements.fileTypeInput.value = String(type);
  filePreviewManagerInstance.elements.fileIdInput.classList.add("KAMN"); // Add class to trigger 'PreviewKAmnFile' handler
  filePreviewManagerInstance.$modal.modal("show");
}

function exportExcel(response, filename) {
  if (!response.success) {
    $("#loaderDiv").hide();
    abp.notify.error(`@L["Message:ErrorOccurred"]: ${response.message || ""}`);
    return;
  }

  const mediaType =
    "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,";
  const a = document.createElement("a");
  a.href = mediaType + response.data.fileData;
  a.download = filename + ".xlsx";
  a.style.display = "none";

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  $("#loaderDiv").hide();
}

function handleDownload(fileString, fileName, mimeType) {
  if (!fileString) {
    abp?.notify?.error?.("No file data to download.");
    return;
  }

  try {
    const byteCharacters = atob(fileString);
    const byteArrays = [];
    const sliceSize = 1024;

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      byteArrays.push(new Uint8Array(byteNumbers));
    }

    const blob = new Blob(byteArrays, { type: mimeType });
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);

    filePreviewManagerInstance.$modal.modal("hide");
  } catch (err) {
    console.error("Error during file download:", err);
    abp?.notify?.error?.("Failed to download file.");
  }
}

function printFile({
  fileData,
  mimeType = "application/pdf",
  fileName = "Report.pdf",
}) {
  if (!fileData) {
    abp?.notify?.error?.("No file to print.");
    return;
  }

  let finalBlobUrl = null;

  // Simple check if it's a URL (starts with http, https, or blob)
  const isUrl = /^(https?:\/\/|blob:)/i.test(fileData);

  if (isUrl) {
    finalBlobUrl = fileData;
  } else {
    // Check if it's a data URL
    const dataUriMatch = fileData.match(/^data:(.*?);base64,(.*)$/);
    if (dataUriMatch) {
      mimeType = dataUriMatch[1];
      fileData = dataUriMatch[2];
    }

    // Convert base64 to Blob URL
    const byteCharacters = atob(fileData);
    const byteArrays = [];
    const sliceSize = 1024;

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      byteArrays.push(new Uint8Array(byteNumbers));
    }

    const blob = new Blob(byteArrays, { type: mimeType });
    finalBlobUrl = URL.createObjectURL(blob);
  }

  // Open and print
  const win = window.open(
    finalBlobUrl + "#toolbar=0&navpanes=0&scrollbar=0",
    "_blank",
  );

  if (win) {
    win.onload = function () {
      try {
        win.focus();
        win.print();
      } catch (err) {
        console.warn("Auto print failed:", err);
      }
    };
    setTimeout(() => URL.revokeObjectURL(finalBlobUrl), 2000);
  } else {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = finalBlobUrl;
    document.body.appendChild(iframe);

    iframe.onload = function () {
      try {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      } catch (err) {
        console.warn("Print via iframe failed:", err);
      }
      setTimeout(() => {
        document.body.removeChild(iframe);
        URL.revokeObjectURL(finalBlobUrl);
      }, 1000);
    };
  }
}

// --- Initialize when the DOM is ready ---
// Use jQuery's ready function for compatibility with Bootstrap's modal JS.
$(document).ready(() => {
  _initFilePreviewManager();
  // Expose manager instance for debugging/advanced usage if needed
  window.__filePreviewManager = filePreviewManagerInstance;
});
