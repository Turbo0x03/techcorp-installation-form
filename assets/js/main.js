$(function () {

    /* 
        This specifies the location of the logo to be exported into the PDF.
        To replace the logo, please upload your image to the URL provided below
        and copy the generated Base64 code.
        URL: https://www.base64-image.de/ 
    */

    const logoBase64 = 'data:image/png;base64,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';

    var datePicker = flatpickr("#date_picker", { dateFormat: "d-m-Y" });

    String.prototype.limit = function (length) {
        return this.length > length ? this.substring(0, length) + "..." : this;
    };
    // Creates a new file and add it to our list
    function ui_multi_add_file(id, file) {
        var template = $("#files-template").text();
        template = template.replace("%%filename%%", file.name.limit(40));

        template = $(template);
        template.prop("id", "uploaderFile" + id);
        template.data("file-id", id);

        $("#files").find("li.empty").fadeOut(); // remove the 'no files yet'
        $("#files").prepend(template);
    }

    // Changes the status messages on our list
    function ui_multi_update_file_status(id, status, message) {
        $("#uploaderFile" + id)
            .find("span.status")
            .html(message)
            .prop("class", "status qq-upload-failed-text text-" + status);
    }

    // Updates a file progress, depending on the parameters it may animate it or change the color.
    function ui_multi_update_file_progress(id, percent, color, active) {
        color = typeof color === "undefined" ? false : color;
        active = typeof active === "undefined" ? true : active;

        var bar = $("#uploaderFile" + id).find("div.progress-bar");

        bar.width(percent + "%").attr("aria-valuenow", percent);
        bar.toggleClass("progress-bar-striped progress-bar-animated", active);

        if (percent === 0) {
            bar.html("");
        } else {
            bar.html(percent + "%");
        }

        if (color !== false) {
            bar.removeClass("bg-success bg-info bg-warning bg-danger");
            bar.addClass("bg-" + color);
        }
    }

    $("#input_5").dmUploader({
        url: "",
        maxFileSize: 3000000, // 3 Megs
        allowedTypes: "image/*",
        extFilter: ["jpg", "jpeg", "png", "gif"],
        onDragEnter: function () {
            // Happens when dragging something over the DnD area
            this.addClass("active");
        },
        onDragLeave: function () {
            // Happens when dragging something OUT of the DnD area
            this.removeClass("active");
        },
        onNewFile: function (id, file) {
            // When a new file is added using the file selector or the DnD area
            ui_multi_add_file(id, file);

            $("#pdf_view")
                .find(".row")
                .prepend("<div class='col-sm-6' id='preview_" + id + "'><img class='img-responsive fit-image' src='' alt='' width = '100%'></div>");

            if (typeof FileReader !== "undefined") {
                var reader = new FileReader();
                var img = $("#uploaderFile" + id).find("img");
                var preview_img = $("#preview_" + id).find("img");

                reader.onload = function (e) {
                    img.attr("src", e.target.result);
                    preview_img.attr("src", e.target.result);
                };
                reader.readAsDataURL(file);
            }
        },
        onBeforeUpload: function (id) {
            // about tho start uploading a file
            ui_multi_update_file_progress(id, 0, "", true);
            ui_multi_update_file_status(id, "uploading", "Uploading...");
        },
        onUploadProgress: function (id, percent) {
            // Updating file progress
            ui_multi_update_file_progress(id, percent);
        },
        onUploadSuccess: function (id, data) {
            // A file was successfully uploaded
            ui_multi_update_file_status(id, "success", "Upload Complete");
            ui_multi_update_file_progress(id, 100, "success", false);
        },
        onUploadError: function (id, xhr, status, message) {
            ui_multi_update_file_status(id, "danger", message);
            ui_multi_update_file_progress(id, 0, "danger", false);
        },
        onFallbackMode: function () {
            // When the browser doesn't support this plugin :(
        },
    });
    $(document).on("click", ".qq-upload-delete", function (e) {
        const str = "#" + e.target.parentNode.id;
        const after = str.substring(str.indexOf("#uploaderFile") + 13);
        $(str).remove();
        $("#preview_" + after).remove();
    });

    var max = $("#input_18").attr("maxlength");
    $("#feedback").html(max + " characters remaining");

    $("#input_18").keyup(function () {
        var text_length = $("#input_18").val().length;
        var text_remaining = max - text_length;

        $("#feedback").html(text_remaining + " characters remaining");
    });

    var max_debit = $("#input_88").attr("maxlength");
    $("#debit_left").html(max_debit + " characters remaining");

    $("#input_88").keyup(function () {
        var text_length_debit = $("#input_88").val().length;
        var text_remaining_debit = max_debit - text_length_debit;

        $("#debit_left").html(text_remaining_debit + " characters remaining");
    });

    var max_contract = $("#input_89").attr("maxlength");
    $("#contract_left").html(max_debit + " characters remaining");

    $("#input_89").keyup(function () {
        var text_length_contract = $("#input_89").val().length;
        var text_remaining_contract = max_debit - text_length_contract;

        $("#contract_left").html(text_remaining_contract + " characters remaining");
    });

    function addWrappedText({ text, textWidth, doc, fontSize = 10, fontType = "normal", lineSpacing = 7, xPosition = 10, initialYPosition = 10, pageWrapInitialYPosition = 10 }) {
        doc.setFontType(fontType);
        doc.setFontSize(fontSize);
        var textLines = doc.splitTextToSize(text, textWidth); // Split the text into lines
        var pageHeight = doc.internal.pageSize.height; // Get page height, we'll use this for auto-paging. TRANSLATE this line if using units other than `pt`
        var cursorY = initialYPosition;

        textLines.forEach((lineText) => {
            if (cursorY > pageHeight - lineSpacing) {
                // Auto-paging
                doc.addPage();
                cursorY = pageWrapInitialYPosition;
            }
            doc.text(xPosition, cursorY, lineText);
            cursorY += lineSpacing;
        });
    }

    async function getImageDimensions(file) {
        return new Promise(function (resolved, rejected) {
            var i = new Image();
            i.onload = function () {
                resolved({ w: i.width, h: i.height });
            };
            i.src = file;
        });
    }

    $("input,select,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            alert(errors);
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var companyName = $("input#input_16").val();
            var contractNote = $("textarea#input_89").val();
            var debitNote = $("textarea#input_88").val();
            var dateFormat = $("input#date_picker").val();
            var contractName = $("[name=q11_contract]:checked").val();
            var debitName = $("[name=q12_directDebit]:checked").val();
            var trainingName = $("[name=q17_trainingTime]:checked").val();
            var internetName = $("input#input_15").val();
            let selectedProducts = new Map();
            $("input[name='q4_myProducts[][id]']:checked")
                .map(function () {
                    var qty = $("select[name='q4_myProducts[special_" + $(this).val() + "][item_0]'] option:selected").text();
                    var name = $("#product-name-input_4_" + $(this).val()).text();
                    return selectedProducts.set(name, qty);
                })
                .get();
            var notesName = $("textarea#input_18").val();

            var doc = new jsPDF("", "pt", "a4");
            //Modify the position of the logo 
            doc.addImage(logoBase64, 'JPEG', -5, 5, 0, 0);

            doc.setFontSize(25);
            doc.text('Company Name', doc.internal.pageSize.width / 2, 150, null, null, 'center');
            doc.setFontSize(13);
            doc.text(companyName, doc.internal.pageSize.width / 2, 175, null, null, 'center');

            doc.setFontSize(25);
            doc.text('Instalation Date', doc.internal.pageSize.width / 2, 225, null, null, 'center');
            doc.setFontSize(13);
            doc.text(dateFormat.length == 0 ? "No date selected" : dateFormat, doc.internal.pageSize.width / 2, 250, null, null, 'center');

            doc.setFontSize(25);
            doc.text('Contract', doc.internal.pageSize.width / 2, 300, null, null, 'center');
            doc.setFontSize(13);
            doc.text(contractName, doc.internal.pageSize.width / 2, 325, null, null, 'center');
            doc.setFontSize(9);
            doc.text("Note: ", 40, 350, null, null).setFont(undefined, 'normal');
            addWrappedText({
                text: contractNote.length == 0 ? "No notes" : contractNote, // Put a really long string here
                textWidth: doc.internal.pageSize.width - 100,
                doc,
                fontSize: "9",
                fontType: "normal",
                lineSpacing: 12, // Space between lines
                xPosition: 70, // Text offset from left of document
                initialYPosition: 350, // Initial offset from top of document; set based on prior objects in document
                pageWrapInitialYPosition: 25, // Initial offset from top of document when page-wrapping
            });


            doc.setFontSize(25);
            doc.text('Direct Debit', doc.internal.pageSize.width / 2, 475, null, null, 'center');
            doc.setFontSize(13);
            doc.text(debitName, doc.internal.pageSize.width / 2, 500, null, null, 'center');
            doc.setFontSize(9);
            doc.text("Note: ", 40, 525, null, null).setFont(undefined, 'normal');
            addWrappedText({
                text: debitNote.length == 0 ? "No notes" : debitNote, // Put a really long string here
                textWidth: doc.internal.pageSize.width - 100,
                doc,
                fontSize: "9",
                fontType: "normal",
                lineSpacing: 12, // Space between lines
                xPosition: 70, // Text offset from left of document
                initialYPosition: 525, // Initial offset from top of document; set based on prior objects in document
                pageWrapInitialYPosition: 25, // Initial offset from top of document when page-wrapping
            });


            doc.setFontSize(25);
            doc.text('Training Time', doc.internal.pageSize.width / 2, 650, null, null, 'center');
            doc.setFontSize(13);
            doc.text(trainingName, doc.internal.pageSize.width / 2, 675, null, null, 'center');

            doc.setFontSize(25);
            doc.text('Internet Provider', doc.internal.pageSize.width / 2, 725, null, null, 'center');
            doc.setFontSize(13);
            doc.text(internetName, doc.internal.pageSize.width / 2, 750, null, null, 'center');

            doc.addPage();

            doc.setFontSize(25);
            doc.text("Products", doc.internal.pageSize.width / 2, 50, null, null, "center");
            if (selectedProducts.size == 0) {
                doc.setFontSize(13);
                doc.text("No Products", doc.internal.pageSize.width / 2, 75, null, null, "center");
            } else {
                var keys = [];
                var values = [];
                selectedProducts.forEach((value, key, map) => {
                    keys.push(key);
                    values.push(value);
                });

                doc.autoTable({
                    theme: "grid",
                    tableLineWidth: 0.5,
                    headeStyles: {
                        halign: "center",
                    },
                    bodyStyles: {
                        halign: "center",
                    },
                    margin: {
                        right: 20,
                        left: 20,
                    },
                    //tableLineColor: [189, 195, 199],
                    tableLineWidth: 0,
                    startY: 75,
                    //tableWidth: doc.internal.pageSize.width,
                    head: [keys],
                    body: [values],
                });
            }

            doc.setFontSize(25);
            doc.text("Notes ", doc.internal.pageSize.width / 2, 200, null, null, "center");

            addWrappedText({
                text: notesName.length == 0 ? "No notes added" : notesName, // Put a really long string here
                textWidth: doc.internal.pageSize.width - 100,
                doc,
                fontSize: "10",
                fontType: "normal",
                lineSpacing: 12, // Space between lines
                xPosition: 40, // Text offset from left of document
                initialYPosition: 225, // Initial offset from top of document; set based on prior objects in document
                pageWrapInitialYPosition: 25, // Initial offset from top of document when page-wrapping
            });

            //doc.addPage();

            doc.setFontSize(25);
            var text_remaining_note = $("#input_18").val().length;
            var newPosition = 0;
            if (text_remaining_note < 1000) {
                newPosition = 400;
                doc.text("Media Files", doc.internal.pageSize.width / 2, newPosition, null, null, "center");
            } else {
                newPosition = 520;
                doc.text("Media Files", doc.internal.pageSize.width / 2, newPosition, null, null, "center");
            }

            const pdfActions = {
                save: (filename) => {
                    var seoStyle = filename;
                    seoStyle = seoStyle.toLowerCase();
                    seoStyle = seoStyle.replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g, "");
                    seoStyle = seoStyle.replace(/\s+/g, "-");
                    doc.save(seoStyle)
                },
                getBlob: () => {
                    const blob = doc.output("bloburl");
                    window.open(blob, "_blank");
                }
            };

            newPosition += 50;
            if ($("div[id^='preview_']").length != 0) {
                var elem = $("#pdf_view");
                elem.show();
                html2canvas(elem[0]).then((canvas) => {
                    var contentWidth = canvas.width;
                    var contentHeight = canvas.height;

                    //One page pdf shows the height of canvas generated by html page;
                    var pageHeight = (contentWidth / 592.28) * (841.89 - (841.89 - newPosition));
                    //html page height without pdf generation
                    var leftHeight = contentHeight;
                    //Page offset
                    var position = 0;
                    //a4 paper size [595.28841.89], width and height of image in pdf of canvas generated by html page
                    var imgWidth = 595.28;
                    var imgHeight = (592.28 / contentWidth) * contentHeight;

                    //Return picture dataURL, parameters: picture format and sharpness (0-1)
                    var pageData = canvas.toDataURL("image/jpeg", 1.0);
                    elem.hide();
                    //Direction is vertical by default, dimension ponits, format A4 [595.28841.89]

                    //There are two heights to distinguish, one is the actual height of the html page, and the height of the generated pdf page (841.89)
                    //When the content does not exceed the display range of one page of pdf, paging is not required
                    if (leftHeight < pageHeight) {
                        doc.addImage(pageData, "JPEG", 0, newPosition, imgWidth, imgHeight);
                    } else {
                        while (leftHeight > 0) {
                            doc.addImage(pageData, "JPEG", 0, position + newPosition, imgWidth, imgHeight);
                            leftHeight -= pageHeight;
                            position -= 841.89;
                            //Avoid adding blank pages
                            if (leftHeight > 0) {
                                doc.addPage();
                            }
                        }
                    }
                    pdfActions.save(companyName);
                });

            } else {
                doc.setFontSize(13);
                doc.text("No Files Selected", doc.internal.pageSize.width / 2, newPosition, null, null, 'center');

                pdfActions.save(companyName);
            }

        },

        filter: function () {
            return $(this).is(":visible");
        },
    });
});
