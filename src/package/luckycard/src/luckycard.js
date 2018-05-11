/*
 * lucky-card.js - Scratch CARDS based on HTML5 Canvas
 *
 * Copyright (c) 2015 Frans Lee dmon@foxmail.com
 *
 * https://github.com/Franslee/lucky-card
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Version:  1.0.3
 *
 * Update:
 *          1.0.1 Fixed a bug with "coverImg".(Thanks to dongnanyanhai reported the problem) 2015-11-10
 *          1.0.2 Fixed a bug when page can be scrolling.(Thanks to agileago's report & Tomatoo's pull) 2016-03-17
 *          1.0.3 Fixed some bugs. 2017-08-17
 *
 */
/* ;
(function(window, document, undefined) { */
    'use strict';

    /**
     * Instantiate parameters
     *
     * @constructor
     */
    function LuckyCard(settings, callback) {
        this.cover = null;
        this.ctx = null;
        this.scratchDiv = settings.scratchDiv;
        this.cardDiv = null;
        this.cHeight = 0;
        this.cWidth = 0;
        this.supportTouch = false;
        this.events = [];
        this.startEventHandler = null;
        this.moveEventHandler = null;
        this.endEventHandler = null;

        this.opt = {
            coverColor: '#C5C5C5',
            coverImg: '',
            ratio: .8,
            callback: null
        };

        this.init(settings, callback);
    };

    function _calcArea(ctx, callback, ratio) {
        var pixels = ctx.getImageData(0, 0, this.cWidth, this.cHeight);
        var transPixels = [];
        _forEach(pixels.data, function(item, i) {
            var pixel = pixels.data[i + 3];
            if (pixel === 0) {
                transPixels.push(pixel);
            }
        });

        if (transPixels.length / pixels.data.length > ratio) {
            callback && typeof callback === 'function' && callback();
        }
    }

    function _forEach(items, callback) {
        return Array.prototype.forEach.call(items, function(item, idx) {
            callback(item, idx);
        });
    }

    function _isCanvasSupported(){
      var elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    }

    /**
     * touchstart/mousedown event handler
     */
    function _startEventHandler(event) {
        event.preventDefault();
        this.moveEventHandler = _moveEventHandler.bind(this);
        this.cover.addEventListener(this.events[1],this.moveEventHandler,false);
        this.endEventHandler = _endEventHandler.bind(this);
        document.addEventListener(this.events[2],this.endEventHandler,false);
    };

    /**
     * touchmove/mousemove event handler
     */
    function _moveEventHandler(event) {
        event.preventDefault();
        var evt = this.supportTouch?event.touches[0]:event;
        var coverPos = this.cover.getBoundingClientRect();
        var pageScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var pageScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        var mouseX = evt.pageX - coverPos.left - pageScrollLeft;
        var mouseY = evt.pageY - coverPos.top - pageScrollTop;

        this.ctx.beginPath();
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.globalCompositeOperation = "destination-out";
        this.ctx.arc(mouseX, mouseY, 10, 0, 2 * Math.PI);
        this.ctx.fill();
    };

    /**
     * touchend/mouseup event handler
     */
    function _endEventHandler(event) {
        event.preventDefault();
        if (this.opt.callback && typeof this.opt.callback === 'function') _calcArea.call(this,this.ctx, this.opt.callback, this.opt.ratio);
        this.cover.removeEventListener(this.events[1],this.moveEventHandler,false);
        document.removeEventListener(this.events[2],this.endEventHandler,false);
    };

    /**
     * Create Canvas element
     */
    LuckyCard.prototype.createCanvas = function() {
        this.cover = document.createElement('canvas');
        this.cover.className = 'nut-cover';
        this.cover.height = this.cHeight;
        this.cover.width = this.cWidth;
        this.ctx = this.cover.getContext('2d');
        if (this.opt.coverImg) {
            var _this = this;
            var coverImg = new Image();
            coverImg.src = this.opt.coverImg;
            coverImg.onload = function() {
                _this.ctx.drawImage(coverImg, 0, 0, _this.cover.width, _this.cover.height);
            }
        } else {
            this.ctx.fillStyle = this.opt.coverColor;
            this.ctx.fillRect(0, 0, this.cover.width, this.cover.height);
        }
        this.scratchDiv.appendChild(this.cover);
        this.cardDiv.style.opacity = 1;
    }

    /**
     * To detect whether support touch events
     */
    LuckyCard.prototype.eventDetect = function() {
        if('ontouchstart' in window) this.supportTouch = true;
        this.events = this.supportTouch ? ['touchstart', 'touchmove', 'touchend'] : ['mousedown', 'mousemove', 'mouseup'];
        this.addEvent();
    };

    /**
     * Add touchstart/mousedown event listener
     */
    LuckyCard.prototype.addEvent = function() {
        this.startEventHandler = _startEventHandler.bind(this);
        this.cover.addEventListener(this.events[0],this.startEventHandler,false);
    };

    /**
     * Clear pixels of canvas
     */
    LuckyCard.prototype.clearCover = function() {
        this.ctx.clearRect(0, 0, this.cover.width, this.cover.height);
        this.cover.removeEventListener(this.events[0],this.startEventHandler);
        this.cover.removeEventListener(this.events[1],this.moveEventHandler);
        this.cover.removeEventListener(this.events[2],this.endEventHandler);
    };


    /**
     * LuckyCard initializer
     *
     * @param {Object} settings  Settings for LuckyCard
     * @param {function} callback  callback function
     */
    LuckyCard.prototype.init = function(settings, callback) {
        if(!_isCanvasSupported()){
            alert('对不起，当前浏览器不支持Canvas，无法使用本控件！');
            return;
        }
        var _this = this;
        _forEach(arguments, function(item) {
            if (typeof item === "object") {
                for (var k in item) {
                    if (k === 'callback' && typeof item[k] === 'function') {
                        _this.opt.callback = item[k].bind(_this);
                    } else {
                        k in _this.opt && (_this.opt[k] = item[k]);
                    }
                }
            } else if (typeof item === "function") {
                _this.opt.callback = item.bind(_this);
            }
        });
        /* this.scratchDiv = document.getElementById('scratch');*/
        if (!this.scratchDiv) return;
        this.cardDiv = this.scratchDiv.querySelector('.nut-content'); 
        console.log(this.cardDiv);
        if (!this.cardDiv) return;
        
        this.cHeight = this.cardDiv.clientHeight;
        this.cWidth = this.cardDiv.clientWidth;
        this.cardDiv.style.opacity = 0;
        this.createCanvas();
        this.eventDetect();
    };

    /**
     * To generate an instance of object
     *
     * @param {Object} settings  Settings for LuckyCard
     * @param {function} callback  callback function
     */
    LuckyCard.case = function(settings, callback) {
        return new LuckyCard(settings, callback);
    };


/*     if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define(function() {
            return LuckyCard;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = LuckyCard.case;
        module.exports.LuckyCard = LuckyCard;
    } else {
        window.LuckyCard = LuckyCard;
    }

})(window, document); */

export default LuckyCard.case;