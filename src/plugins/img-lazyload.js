/*!
 * Lazyload images
 */
import jquery from 'jquery';

(function ($) {

    $.fn.lazyload = function (options) {
        options = options || {};
        options.attribute = options.attribute || "data-src";
        new LazyLoad($.makeArray(this), options);
        return this;
    };

    const defaults = {
        src: "data-src",
        selector: ".img-lazyload",
        root: null,
        rootMargin: "0px",
        threshold: 0
    };

    function LazyLoad(images, options) {
        this.config = Object.assign({}, defaults, options || {});
        this.images = images || document.querySelectorAll(this.config.selector);
        this.observer = null;
        this.init();
    }

    LazyLoad.prototype = {
        init: function () {
            if (!window.IntersectionObserver) {
                this.load();
                return;
            }

            let self = this;
            let observerConfig = {
                root: this.config.root,
                rootMargin: this.config.rootMargin,
                threshold: [this.config.threshold]
            };

            this.observer = new IntersectionObserver(function (entries) {
                Array.prototype.forEach.call(entries, function (entry) {
                    if (entry.isIntersecting) {
                        self.observer.unobserve(entry.target);
                        $(entry.target).fadeOut(150, function () {
                            let src = entry.target.getAttribute(self.config.src);
                            if ("img" === entry.target.tagName.toLowerCase()) {
                                if (src) {
                                    entry.target.src = src;
                                }
                            } else {
                                entry.target.style.backgroundImage = "url(" + src + ")";
                            }
                        }).fadeIn(300)
                    }
                });
            }, observerConfig);

            Array.prototype.forEach.call(this.images, function (image) {
                self.observer.observe(image);
            });
        },
        load: function () {
            if (!this.config) return;

            let self = this;
            Array.prototype.forEach.call(this.images, function (image) {
                let src = image.getAttribute(self.config.src);
                if ("img" === image.tagName.toLowerCase()) {
                    if (src) {
                        image.src = src;
                    }
                } else {
                    image.style.backgroundImage = "url('" + src + "')";
                }
            });
        },
        destroy: function () {
            if (!this.config) return;

            this.observer.disconnect();
            this.config = null;
        }
    };
})(jquery);
