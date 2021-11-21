/**
 *  author: WaterMelon
 *  date 21-10-23
 *  desc: for csdn copy any
 */
(function() {
    'use strict';
    const log = console.log.bind(console)

    class CSDN {
        constructor(options) {
            this.option = options
            this.init()
        }
        static new(options) {
            return new this(options)
        }

        init() {
            let { className } = this.option
            var code = this.es(className)
            this.each(code)
        }
        // 获取元素
        es(domClassName) {
            return document.querySelectorAll(domClassName)
        }
        // 遍历元素
        each(doms) {
            var me = this
            Array.prototype.forEach.call(doms, function (item) {
                me.contentEditAble(item)
            })
        }
        // 给遍历每一个对象增加一个 contenteditable 即可
        contentEditAble(domitem) {
            domitem.setAttribute('contenteditable', 'true')
        }
    }
    const __main = function() {
        log('csdnCode  running...')
        // var className = '.has-numbering'

        var csdn = CSDN.new({ className: 'code'})
    }

    var hookXHRLoad = function(callback) {
        var open = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function() {
            this.addEventListener('load', function() {
                callback();
            });
            open.apply(this, arguments);
        };
    };

    __main();
    // hookXHRLoad(function(xhr) {
    //     __main();

    // });

})();