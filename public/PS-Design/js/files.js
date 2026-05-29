$(document).on("click", "#upload_user_signature", function (e) {
    console.log("#upload_user_signature");
    e.preventDefault();
    let pressed = $(this);
    prepareForUploadFile(pressed);
})
$(document).on("click", ".image-fake-btn", function (e) {
    e.preventDefault();
    let pressed = $(this);
    prepareForUploadFile(pressed);
});

function getUploadCallbackRegistry() {
    if (!window.PSDesignUploadCallbacks) {
        window.PSDesignUploadCallbacks = Object.create(null);
    }
    return typeof window.PSDesignUploadCallbacks === "object" ? window.PSDesignUploadCallbacks : null;
}

function callAllowedUploadCallback(callbackName) {
    const registry = getUploadCallbackRegistry();
    if (!registry) return;
    if (typeof callbackName !== "string") return;
    const name = callbackName.trim();
    if (!name) return;
    if (name === "__proto__" || name === "prototype" || name === "constructor") return;
    if (!Object.prototype.hasOwnProperty.call(registry, name)) return;
    const fn = registry[name];
    if (typeof fn !== "function") return;
    fn();
}

function prepareForUploadFile(pressed) {
    let fieldId = pressed.attr("data-fieldId");
    let filedName = pressed.attr("data-fieldName");
    let imageId = pressed.attr("data-imageId");
    let url = pressed.attr("data-url");
    let successcallback = pressed.attr("data-successcallback");
    let failedcallback = pressed.attr("data-failedcallback");

    let removeBtnId = pressed.attr("data-removeBtnId");
    let extraformfields_propname = pressed.attr("data-extraformfields_propname");
    let extraformfields_values = pressed.attr("data-extraformfields_values");
    $(fieldId).one("change", function (e) {//one --> to upload just one file, bind --> to upload all selected files with the same request.
        renderImageAndUpload(fieldId, filedName, imageId, url, removeBtnId, successcallback, failedcallback, extraformfields_propname, extraformfields_values);
    });
    $(fieldId).trigger("click");
}
function renderImageAndUpload(fieldId, filedName, imageId, url, removeBtnId, successcallback, failedcallback,extraformfields_propname, extraformfields_values) {
    //console.log("url: ",url);

    var files = $(fieldId).prop("files");
    if (files && files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(imageId).attr("src", e.target.result);
            $(imageId).show();
        };
        reader.readAsDataURL(files[0]);
        if (url !== null && url !== "") {
            var formData = new FormData();
            for (var i = 0; i < files.length; i++) {
                formData.append(filedName, files[i]);
            }
            if (extraformfields_propname) {
                formData.append(extraformfields_propname, extraformfields_values);
            }
            $.ajax({
                type: 'post',
                url: url,
                contentType: false,
                processData: false,
                data: formData,
                dataType: "json",
                success: function (data) {
                    if (data.success) {
                        if (removeBtnId) {
                            $(removeBtnId).show();
                        }
                        callAllowedUploadCallback(successcallback);
                        abp.notify.success(abp.localization.localize("Message_ImageUpdatedSuccessfully"));
                    } else {
                        callAllowedUploadCallback(failedcallback);
                        console.log(data.message);
                    }
                },
                error: function (jqXHR) {
                    console.log(jqXHR.error);
                },
                complete: function (_jqXHR, _status) {
                }
            });
            $(fieldId).val('');//this prevent uploading image with regular post action.
        }
    }
}

$(document).on("click", ".image-remove-btn", function (e) {
    e.preventDefault();

    let pressed = $(this);
    let url = pressed.attr("data-url");
    let imgId = pressed.attr("data-imgId");
    let emptySrc = pressed.attr("data-emptySrc");

    $.ajax({
        type: 'delete',
        url: url,
        dataType: "json",
        success: function (data) {
            if (data.result) {
                $(imgId).attr('src', emptySrc);
                pressed.hide();
            } else {
                console.log(data.message);
            }
        },
        error: function (jqXHR) {
            console.log(jqXHR.error);
        },
        complete: function (_jqXHR, _status) {
        }
    });
});

$(document).on("change", ".custom-file-input", function (_e) {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").text(fileName);
})
$(document).on("change", ".image-update", function (_e) {
    var changed = $(this);
    var files = changed.prop("files");
    if (files && files[0]) {
        //console.log(changed.closest('div').find('img').attr("id"));
        var reader = new FileReader();
        reader.onload = function (e) {
            changed.closest('div').find('img').attr('src', e.target.result);
        };
        reader.readAsDataURL(files[0]);
    }
});
