/* icons.js - loads the shared sprite and renders <use>-based icons */

(() => {
  "use strict";

  const ICONS_URL = "./icons.svg";
  const ICON_SELECTOR = "[data-icon]";
  const READY_ATTR = "data-icon-ready";
  const SVG_NS = "http://www.w3.org/2000/svg";
  const XLINK_NS = "http://www.w3.org/1999/xlink";

  let spriteElement = null;
  let spritePromise = null;
  let observer = null;
  const symbolRegistry = new Map();

  function registerSymbols(sprite) {
    symbolRegistry.clear();
    sprite.querySelectorAll("symbol[id]").forEach((symbol) => {
      const id = symbol.id;
      if (!id) return;
      const name = id.startsWith("icon-") ? id.slice(5) : id;
      symbolRegistry.set(name, symbol);
    });
  }

  async function loadSprite() {
    if (spriteElement) return spriteElement;
    if (spritePromise) return spritePromise;

    spritePromise = (async () => {
      const res = await fetch(ICONS_URL, { cache: "no-store" });
      if (!res.ok) {
        throw new Error(`Failed to fetch ${ICONS_URL}. Status: ${res.status}`);
      }

      const text = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "image/svg+xml");
      const parsed = doc.querySelector("svg");
      if (!parsed || doc.querySelector("parsererror")) {
        const preview = text.slice(0, 200).replace(/\s+/g, " ");
        throw new Error(
          `Sprite does not contain a root <svg>. Preview: ${preview}`,
        );
      }

      const svg = document.importNode(parsed, true);
      svg.querySelectorAll("script, foreignObject").forEach((node) => node.remove());
      svg.querySelectorAll("*").forEach((node) => {
        Array.from(node.attributes).forEach((attr) => {
          const name = attr.name.toLowerCase();
          if (name.startsWith("on")) {
            node.removeAttribute(attr.name);
          } else if ((name === "href" || name === "xlink:href") && /^javascript:/i.test(attr.value)) {
            node.removeAttribute(attr.name);
          }
        });
      });

      svg.setAttribute("aria-hidden", "true");
      svg.style.position = "absolute";
      svg.style.width = "0";
      svg.style.height = "0";
      svg.style.overflow = "hidden";
      svg.style.opacity = "0";
      svg.style.pointerEvents = "none";
      svg.style.left = "-9999px";
      svg.style.top = "-9999px";

      document.body.insertBefore(svg, document.body.firstChild);
      spriteElement = svg;
      registerSymbols(spriteElement);
      return spriteElement;
    })();

    try {
      return await spritePromise;
    } catch (error) {
      console.error("[icons] Failed to load sprite:", error);
      spritePromise = null;
      spriteElement = null;
      symbolRegistry.clear();
      return null;
    }
  }

  function createIconSvg(name) {
    if (!name) return null;
    const symbol = symbolRegistry.get(name);
    if (!symbol) {
      console.warn(`Icon "${name}" is missing in sprite`);
      return null;
    }

    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("width", "1em");
    svg.setAttribute("height", "1em");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("fill", "currentColor");
    svg.style.display = "inline-block";

    const viewBox = symbol.getAttribute("viewBox");
    if (viewBox) {
      svg.setAttribute("viewBox", viewBox);
    }

    const use = document.createElementNS(SVG_NS, "use");
    const symbolHref = `#${symbol.id}`;
    use.setAttribute("href", symbolHref);
    use.setAttributeNS(XLINK_NS, "xlink:href", symbolHref);
    svg.appendChild(use);

    return svg;
  }

  function renderTarget(target) {
    if (target.getAttribute(READY_ATTR) === "true") return;
    if (target.querySelector && target.querySelector("svg")) return;

    const name = (target.dataset?.icon || "").trim();
    if (!name) return;

    const svg = createIconSvg(name);
    if (!svg) return;

    target.replaceChildren(svg);
    target.setAttribute(READY_ATTR, "true");
  }

  function renderIcons(root = document) {
    if (!spriteElement) return;

    const candidates = [];
    if (
      root.nodeType === Node.ELEMENT_NODE &&
      root.matches &&
      root.matches(ICON_SELECTOR)
    ) {
      candidates.push(root);
    }

    if (root.querySelectorAll) {
      root.querySelectorAll(ICON_SELECTOR).forEach((target) => {
        candidates.push(target);
      });
    }

    candidates.forEach(renderTarget);
  }

  function observeIcons() {
    if (observer) return;

    observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue;
          if (
            (node.matches && node.matches(ICON_SELECTOR)) ||
            (node.querySelector && node.querySelector(ICON_SELECTOR))
          ) {
            renderIcons(node);
          }
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  async function boot() {
    const sprite = await loadSprite();
    if (!sprite) return;

    observeIcons();
    renderIcons(document);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
