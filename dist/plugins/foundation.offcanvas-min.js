"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}();!function($){var e=function(){function e(t,i){_classCallCheck(this,e),this.$element=t,this.options=$.extend({},e.defaults,this.$element.data(),i),this.$lastTrigger=$(),this._init(),this._events(),Foundation.registerPlugin(this,"OffCanvas")}return _createClass(e,[{key:"_init",value:function e(){var t=this.$element.attr("id");if(this.$element.attr("aria-hidden","true"),$(document).find('[data-open="'+t+'"], [data-close="'+t+'"], [data-toggle="'+t+'"]').attr("aria-expanded","false").attr("aria-controls",t),this.options.closeOnClick)if($(".js-off-canvas-exit").length)this.$exiter=$(".js-off-canvas-exit");else{var i=document.createElement("div");i.setAttribute("class","js-off-canvas-exit"),$("[data-off-canvas-content]").append(i),this.$exiter=$(i)}this.options.isRevealed=this.options.isRevealed||new RegExp(this.options.revealClass,"g").test(this.$element[0].className),this.options.isRevealed&&(this.options.revealOn=this.options.revealOn||this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2],this._setMQChecker()),this.options.transitionTime||(this.options.transitionTime=1e3*parseFloat(window.getComputedStyle($("[data-off-canvas-wrapper]")[0]).transitionDuration))}},{key:"_events",value:function e(){this.$element.off(".zf.trigger .zf.offcanvas").on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"keydown.zf.offcanvas":this._handleKeyboard.bind(this)}),this.options.closeOnClick&&this.$exiter.length&&this.$exiter.on({"click.zf.offcanvas":this.close.bind(this)})}},{key:"_setMQChecker",value:function e(){var t=this;$(window).on("changed.zf.mediaquery",function(){Foundation.MediaQuery.atLeast(t.options.revealOn)?t.reveal(!0):t.reveal(!1)}).one("load.zf.offcanvas",function(){Foundation.MediaQuery.atLeast(t.options.revealOn)&&t.reveal(!0)})}},{key:"reveal",value:function e(t){var i=this.$element.find("[data-close]");t?(this.close(),this.isRevealed=!0,this.$element.off("open.zf.trigger toggle.zf.trigger"),i.length&&i.hide()):(this.isRevealed=!1,this.$element.on({"open.zf.trigger":this.open.bind(this),"toggle.zf.trigger":this.toggle.bind(this)}),i.length&&i.show())}},{key:"open",value:function e(t,i){if(!this.$element.hasClass("is-open")&&!this.isRevealed){var s=this,n=$(document.body);this.options.forceTop&&$("body").scrollTop(0),Foundation.Move(this.options.transitionTime,this.$element,function(){$("[data-off-canvas-wrapper]").addClass("is-off-canvas-open is-open-"+s.options.position),s.$element.addClass("is-open")}),this.$element.attr("aria-hidden","false").trigger("opened.zf.offcanvas"),this.options.closeOnClick&&this.$exiter.addClass("is-visible"),i&&(this.$lastTrigger=i.attr("aria-expanded","true")),this.options.autoFocus&&this.$element.one(Foundation.transitionend(this.$element),function(){s.$element.find("a, button").eq(0).focus()}),this.options.trapFocus&&($("[data-off-canvas-content]").attr("tabindex","-1"),this._trapFocus())}}},{key:"_trapFocus",value:function e(){var t=Foundation.Keyboard.findFocusable(this.$element),i=t.eq(0),s=t.eq(-1);t.off(".zf.offcanvas").on("keydown.zf.offcanvas",function(e){9!==e.which&&9!==e.keycode||(e.target!==s[0]||e.shiftKey||(e.preventDefault(),i.focus()),e.target===i[0]&&e.shiftKey&&(e.preventDefault(),s.focus()))})}},{key:"close",value:function e(t){if(this.$element.hasClass("is-open")&&!this.isRevealed){var i=this;$("[data-off-canvas-wrapper]").removeClass("is-off-canvas-open is-open-"+i.options.position),i.$element.removeClass("is-open"),this.$element.attr("aria-hidden","true").trigger("closed.zf.offcanvas"),this.options.closeOnClick&&this.$exiter.removeClass("is-visible"),this.$lastTrigger.attr("aria-expanded","false"),this.options.trapFocus&&$("[data-off-canvas-content]").removeAttr("tabindex")}}},{key:"toggle",value:function e(t,i){this.$element.hasClass("is-open")?this.close(t,i):this.open(t,i)}},{key:"_handleKeyboard",value:function e(t){27===t.which&&(t.stopPropagation(),t.preventDefault(),this.close(),this.$lastTrigger.focus())}},{key:"destroy",value:function e(){this.close(),this.$element.off(".zf.trigger .zf.offcanvas"),this.$exiter.off(".zf.offcanvas"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={closeOnClick:!0,transitionTime:0,position:"left",forceTop:!0,isRevealed:!1,revealOn:null,autoFocus:!0,revealClass:"reveal-for-",trapFocus:!1},Foundation.plugin(e,"OffCanvas")}(jQuery);