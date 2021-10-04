{ /*jQuery.browser.mobile*/
    /**
     * jQuery.browser.mobile (http://detectmobilebrowser.com/)
     *
     * jQuery.browser.mobile will be true if the browser is a mobile device
     *
     **/
    (function(a) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    })(navigator.userAgent || navigator.vendor || window.opera);
}

(function($) {
    $(document).ready(function() {
        (function run() {
            var books = $(".real3dflipbook");
            if (books.length == 0) {
                setTimeout(function() {
                    run();
                }, 1000);
            } else {

                $.each(books, function() {

                    var id = $(this).attr('id')

                    var options = $(this).data('flipbook-options')

                    this.removeAttribute('data-flipbook-options');

                    options.assets = {
                        preloader: options.rootFolder + "images/preloader.jpg",
                        left: options.rootFolder + "images/left.png",
                        overlay: options.rootFolder + "images/overlay.jpg",
                        flipMp3: options.rootFolder + "mp3/turnPage.mp3",
                        shadowPng: options.rootFolder + "images/shadow.png",
                        spinner: options.rootFolder + "images/spinner.gif"
                    };

                    options.pdfjsworkerSrc = options.rootFolder + 'js/pdf.worker.min.js?ver=3.8.2'

                    function convertStrings(obj) {

                        $.each(obj, function(key, value) {
                            // console.log(key + ": " + options[key]);
                            if (typeof(value) == 'object' || typeof(value) == 'array') {
                                convertStrings(value)
                            } else if (!isNaN(value)) {
                                if (obj[key] === "")
                                    delete obj[key]
                                else
                                    obj[key] = Number(value)
                            } else if (value == "true") {
                                obj[key] = true
                            } else if (value == "false") {
                                obj[key] = false
                            }
                        });

                    }

                    convertStrings(options)

                    function r3d_stripslashes(str) {
                        // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                        // +   improved by: Ates Goral (http://magnetiq.com)
                        // +      fixed by: Mick@el
                        // +   improved by: marrtins
                        // +   bugfixed by: Onno Marsman
                        // +   improved by: rezna
                        // +   input by: Rick Waldron
                        // +   reimplemented by: Brett Zamir (http://brett-zamir.me)
                        // +   input by: Brant Messenger (http://www.brantmessenger.com/)
                        // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
                        // *     example 1: stripslashes('Kevin\'s code');
                        // *     returns 1: "Kevin's code"
                        // *     example 2: stripslashes('Kevin\\\'s code');
                        // *     returns 2: "Kevin\'s code"
                        return (str + '').replace(/\\(.?)/g, function(s, n1) {
                            switch (n1) {
                                case '\\':
                                    return '\\';
                                case '0':
                                    return '\u0000';
                                case '':
                                    return '';
                                default:
                                    return n1;
                            }
                        });
                    }

                    function decode(obj) {
                        for (var key in obj) {
                            if (typeof obj[key] == 'string')
                                obj[key] = r3d_stripslashes(obj[key])
                            else if (typeof obj[key] == 'object')
                                obj[key] = decode(obj[key])
                        }
                        return obj
                    }
                    options = decode(options)

                    if (options.pages) {

                        for (var key in options.pages) {
                            options.pages[key].htmlContent = unescape(options.pages[key].htmlContent)
                        }

                    }

                    options.social = [];

                    if (options.btnDownloadPages.url) {
                        options.btnDownloadPages.url = options.btnDownloadPages.url.replace(/\\/g, '/')
                    } else
                        options.btnDownloadPages.enabled = false

                    if (options.btnDownloadPdfUrl) {
                        options.btnDownloadPdf.url = options.btnDownloadPdfUrl.replace(/\\/g, '/')
                    } else if (options.btnDownloadPdf.url) {
                        options.btnDownloadPdf.url = options.btnDownloadPdf.url.replace(/\\/g, '/')
                    } else if (options.pdfUrl) {
                        options.btnDownloadPdf.url = options.pdfUrl.replace(/\\/g, '/')
                    } else
                        options.btnDownloadPdf.enabled = false

                    var bookContainer = $(this);

                    var isMobile = jQuery.browser.mobile || isIDevice || isAndroid
                    options.mode = isMobile && options.modeMobile ? options.modeMobile : options.mode

                    switch (options.mode) {

                        case "normal":

                            var containerClass = bookContainer.attr("class")
                            var containerId = bookContainer.attr("id")

                            bookContainer.removeClass(containerClass).addClass(containerClass + "-" + containerId)
                            options.lightBox = false;
                            bookContainer
                                .css("position", "relative")
                                .css("display", "block")
                                .css("height", String(options.height) + "px")
                            // .css("z-index",'999999 !important')
                            bookContainer.flipBook(options);

                            if (options.fitToParent) {

                                window.onresize = function(event) {
                                    fitToParent()
                                };

                                function fitToParent() {
                                    //find parent that has width & height != 0
                                    var parent = findParent(bookContainer);

                                    bookContainer.css("width", String(parent.width()) + "px")
                                    bookContainer.css("height", String(parent.height()) + "px")

                                    function findParent(elem) {
                                        if (elem.parent().width() > 0 && elem.parent().height() > 0)
                                            return elem.parent()
                                        else
                                            return findParent(elem.parent())
                                    }
                                }
                                fitToParent();

                            } else {

                                jQuery(window).resize(function() {
                                    resizeHeight()
                                });

                                var isAndroid = (/android/gi).test(navigator.appVersion)
                                var isIDevice = (/iphone|ipad/gi).test(navigator.appVersion)

                                options.aspectRatio = isMobile && options.aspectRatioMobile ? options.aspectRatioMobile : options.aspectRatio

                                function resizeHeight() {
                                    if (bookContainer.width() > 0)
                                        bookContainer.css("height", String(bookContainer.width() / options.aspectRatio) + "px")
                                }
                                resizeHeight();
                            }
                            break;

                        case "lightbox":

                            bookContainer
                                .css("display", "inline")
                            options.lightBox = true;

                            var containerClass = "real3dflipbook-" + bookContainer.attr("id")

                            var holder = $("<div class='" + containerClass + "'>")
                            holder.attr('style', options.lightboxContainerCSS)
                            bookContainer.before(holder)
                            bookContainer.remove();

                            options.lightboxThumbnailInfo = true

                            if (options.lightboxThumbnailUrl && options.lightboxThumbnailUrl != "") {

                                var thumbWrapper = $('<div>').attr("style", "position: relative;").appendTo(holder)
                                var thumb = $('<img></img>')
                                    .attr('src', options.lightboxThumbnailUrl)
                                    .appendTo(thumbWrapper)
                                    .attr('style', options.lightboxThumbnailUrlCSS)

                                if (options.lightboxThumbnailInfo) {

                                    var defaultLightboxThumbnailInfoCSS = "position: absolute; display: grid; align-items: center; text-align: center; top: 0;  width: 100%; height: 100%; font-size: 16px; color: #000; background: rgba(255,255,255,.8); "

                                    var thumbInfo = $('<span>')
                                        .appendTo(thumbWrapper)
                                        .attr('style', defaultLightboxThumbnailInfoCSS + options.lightboxThumbnailInfoCSS)
                                        .text(options.lightboxThumbnailInfoText || options.name)
                                        .hide()

                                    thumbWrapper.hover(
                                        function() {
                                            thumbInfo.fadeIn("fast")
                                        },
                                        function() {
                                            thumbInfo.fadeOut("fast")
                                        }
                                    )

                                }
                            }

                            if (options.lightboxText && options.lightboxText != "") {
                                var link = $('<a/>').text(options.lightboxText)
                                if (options.lightboxTextPosition == 'top')
                                    link.prependTo(holder)
                                else
                                    link.appendTo(holder)
                                link.attr('style', options.lightboxTextCSS)
                            }

                            if (!options.lightboxCssClass || options.lightboxCssClass == "")
                                options.lightboxCssClass = containerClass

                            holder.addClass(options.lightboxCssClass)

                            $("." + options.lightboxCssClass).flipBook(options);

                            break;

                        case "fullscreen":

                            options.lightBox = false;
                            var elem = 'body'

                            bookContainer
                                .appendTo(elem)
                                .css("position", "fixed")
                                .css("top", "0")
                                .css("bottom", "0")
                                .css("left", "0")
                                .css("right", "0")
                                // .css('top', options.offsetTop + 'px')
                                //flipbook on top of everything - over the site menu
                                // .css('z-index', options.zIndex || '2147483647');
                                .css('z-index', '2147483647');
                            bookContainer.flipBook(options);
                            $('body').css('overflow', 'hidden');

                            if (options.menuSelector) {

                                var $menu = $(options.menuSelector)
                                bookContainer.css('top', $menu.height() + 'px')
                                window.onresize = function(event) {
                                    bookContainer.css('top', $menu.height() + 'px')
                                };

                            }
                            break;
                    }

                })
            }
        })();
    });
}(jQuery));