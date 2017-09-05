"use strict";function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}();!function($){var t=function(){function t(i,e){_classCallCheck(this,t),this.$element=i,this.options=$.extend({},t.defaults,this.$element.data(),e),this._init(),Foundation.registerPlugin(this,"Orbit"),Foundation.Keyboard.register("Orbit",{ltr:{ARROW_RIGHT:"next",ARROW_LEFT:"previous"},rtl:{ARROW_LEFT:"next",ARROW_RIGHT:"previous"}})}return _createClass(t,[{key:"_init",value:function t(){this.$wrapper=this.$element.find("."+this.options.containerClass),this.$slides=this.$element.find("."+this.options.slideClass);var i=this.$element.find("img");this.$slides.filter(".is-active").length||this.$slides.eq(0).addClass("is-active"),this.options.useMUI||this.$slides.addClass("no-motionui"),i.length?Foundation.onImagesLoaded(i,this._prepareForOrbit.bind(this)):this._prepareForOrbit(),this.options.bullets&&this._loadBullets(),this._events(),this.options.autoPlay&&this.$slides.length>1&&this.geoSync(),this.options.accessible&&this.$wrapper.attr("tabindex",0)}},{key:"_loadBullets",value:function t(){this.$bullets=this.$element.find("."+this.options.boxOfBullets).find("button")}},{key:"geoSync",value:function t(){var i=this;this.timer=new Foundation.Timer(this.$element,{duration:this.options.timerDelay,infinite:!1},function(){i.changeSlide(!0)}),this.timer.start()}},{key:"_prepareForOrbit",value:function t(){var i=this;this._setWrapperHeight(function(t){i._setSlideHeight(t)})}},{key:"_setWrapperHeight",value:function t(i){var e=0,s,n=0;this.$slides.each(function(){s=this.getBoundingClientRect().height,$(this).attr("data-slide",n),n&&$(this).css({position:"relative",display:"none"}),e=s>e?s:e,n++}),n===this.$slides.length&&(this.$wrapper.css({height:e}),i(e))}},{key:"_setSlideHeight",value:function t(i){this.$slides.each(function(){$(this).css("max-height",i)})}},{key:"_events",value:function t(){var i=this;if(this.$slides.length>1){if(this.options.swipe&&this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit",function(t){t.preventDefault(),i.changeSlide(!0)}).on("swiperight.zf.orbit",function(t){t.preventDefault(),i.changeSlide(!1)}),this.options.autoPlay&&(this.$slides.on("click.zf.orbit",function(){i.$element.data("clickedOn",!i.$element.data("clickedOn")),i.timer[i.$element.data("clickedOn")?"pause":"start"]()}),this.options.pauseOnHover&&this.$element.on("mouseenter.zf.orbit",function(){i.timer.pause()}).on("mouseleave.zf.orbit",function(){i.$element.data("clickedOn")||i.timer.start()})),this.options.navButtons){this.$element.find("."+this.options.nextClass+", ."+this.options.prevClass).attr("tabindex",0).on("click.zf.orbit touchend.zf.orbit",function(t){t.preventDefault(),i.changeSlide($(this).hasClass(i.options.nextClass))})}this.options.bullets&&this.$bullets.on("click.zf.orbit touchend.zf.orbit",function(){if(/is-active/g.test(this.className))return!1;var t=$(this).data("slide"),e=t>i.$slides.filter(".is-active").data("slide"),s=i.$slides.eq(t);i.changeSlide(e,s,t)}),this.$wrapper.add(this.$bullets).on("keydown.zf.orbit",function(t){Foundation.Keyboard.handleKey(t,"Orbit",{next:function(){i.changeSlide(!0)},previous:function(){i.changeSlide(!1)},handled:function(){$(t.target).is(i.$bullets)&&i.$bullets.filter(".is-active").focus()}})})}}},{key:"changeSlide",value:function t(i,e,s){var n=this.$slides.filter(".is-active").eq(0);if(/mui/g.test(n[0].className))return!1;var o=this.$slides.first(),a=this.$slides.last(),l=i?"Right":"Left",r=i?"Left":"Right",h=this,u;u=e||(i?this.options.infiniteWrap?n.next("."+this.options.slideClass).length?n.next("."+this.options.slideClass):o:n.next("."+this.options.slideClass):this.options.infiniteWrap?n.prev("."+this.options.slideClass).length?n.prev("."+this.options.slideClass):a:n.prev("."+this.options.slideClass)),u.length&&(this.options.bullets&&(s=s||this.$slides.index(u),this._updateBullets(s)),this.options.useMUI?(Foundation.Motion.animateIn(u.addClass("is-active").css({position:"absolute",top:0}),this.options["animInFrom"+l],function(){u.css({position:"relative",display:"block"}).attr("aria-live","polite")}),Foundation.Motion.animateOut(n.removeClass("is-active"),this.options["animOutTo"+r],function(){n.removeAttr("aria-live"),h.options.autoPlay&&!h.timer.isPaused&&h.timer.restart()})):(n.removeClass("is-active is-in").removeAttr("aria-live").hide(),u.addClass("is-active is-in").attr("aria-live","polite").show(),this.options.autoPlay&&!this.timer.isPaused&&this.timer.restart()),this.$element.trigger("slidechange.zf.orbit",[u]))}},{key:"_updateBullets",value:function t(i){var e=this.$element.find("."+this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur(),s=e.find("span:last").detach(),n=this.$bullets.eq(i).addClass("is-active").append(s)}},{key:"destroy",value:function t(){this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide(),Foundation.unregisterPlugin(this)}}]),t}();t.defaults={bullets:!0,navButtons:!0,animInFromRight:"slide-in-right",animOutToRight:"slide-out-right",animInFromLeft:"slide-in-left",animOutToLeft:"slide-out-left",autoPlay:!0,timerDelay:5e3,infiniteWrap:!0,swipe:!0,pauseOnHover:!0,accessible:!0,containerClass:"orbit-container",slideClass:"orbit-slide",boxOfBullets:"orbit-bullets",nextClass:"orbit-next",prevClass:"orbit-previous",useMUI:!0},Foundation.plugin(t,"Orbit")}(jQuery);