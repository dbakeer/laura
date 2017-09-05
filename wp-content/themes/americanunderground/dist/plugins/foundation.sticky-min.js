"use strict";function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(i,s,e){return s&&t(i.prototype,s),e&&t(i,e),i}}();!function($){function t(t){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*t}var i=function(){function i(t,s){_classCallCheck(this,i),this.$element=t,this.options=$.extend({},i.defaults,this.$element.data(),s),this._init(),Foundation.registerPlugin(this,"Sticky")}return _createClass(i,[{key:"_init",value:function t(){var i=this.$element.parent("[data-sticky-container]"),s=this.$element[0].id||Foundation.GetYoDigits(6,"sticky"),e=this;i.length||(this.wasWrapped=!0),this.$container=i.length?i:$(this.options.container).wrapInner(this.$element),this.$container.addClass(this.options.containerClass),this.$element.addClass(this.options.stickyClass).attr({"data-resize":s}),this.scrollCount=this.options.checkEvery,this.isStuck=!1,$(window).one("load.zf.sticky",function(){""!==e.options.anchor?e.$anchor=$("#"+e.options.anchor):e._parsePoints(),e._setSizes(function(){e._calc(!1)}),e._events(s.split("-").reverse().join("-"))})}},{key:"_parsePoints",value:function t(){var i=this.options.topAnchor,s=this.options.btmAnchor,e=[i,s],n={};if(i&&s)for(var o=0,a=e.length;o<a&&e[o];o++){var c;if("number"==typeof e[o])c=e[o];else{var r=e[o].split(":"),h=$("#"+r[0]);c=h.offset().top,r[1]&&"bottom"===r[1].toLowerCase()&&(c+=h[0].getBoundingClientRect().height)}n[o]=c}else n={0:1,1:document.documentElement.scrollHeight};this.points=n}},{key:"_events",value:function t(i){var s=this,e=this.scrollListener="scroll.zf."+i;this.isOn||(this.canStick&&(this.isOn=!0,$(window).off(e).on(e,function(t){0===s.scrollCount?(s.scrollCount=s.options.checkEvery,s._setSizes(function(){s._calc(!1,window.pageYOffset)})):(s.scrollCount--,s._calc(!1,window.pageYOffset))})),this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(t,n){s._setSizes(function(){s._calc(!1),s.canStick?s.isOn||s._events(i):s.isOn&&s._pauseListeners(e)})}))}},{key:"_pauseListeners",value:function t(i){this.isOn=!1,$(window).off(i),this.$element.trigger("pause.zf.sticky")}},{key:"_calc",value:function t(i,s){if(i&&this._setSizes(),!this.canStick)return this.isStuck&&this._removeSticky(!0),!1;s||(s=window.pageYOffset),s>=this.topPoint?s<=this.bottomPoint?this.isStuck||this._setSticky():this.isStuck&&this._removeSticky(!1):this.isStuck&&this._removeSticky(!0)}},{key:"_setSticky",value:function t(){var i=this.options.stickTo,s="top"===i?"marginTop":"marginBottom",e="top"===i?"bottom":"top",n={};n[s]=this.options[s]+"em",n[i]=0,n[e]="auto",n.left=this.$container.offset().left+parseInt(window.getComputedStyle(this.$container[0])["padding-left"],10),this.isStuck=!0,this.$element.removeClass("is-anchored is-at-"+e).addClass("is-stuck is-at-"+i).css(n).trigger("sticky.zf.stuckto:"+i)}},{key:"_removeSticky",value:function t(i){var s=this.options.stickTo,e="top"===s,n={},o=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight,a=e?"marginTop":"marginBottom",c=e?"bottom":"top",r=i?"top":"bottom";n[a]=0,i&&!e||e&&!i?(n[s]=o,n[c]=0):(n[s]=0,n[c]=o),n.left="",this.isStuck=!1,this.$element.removeClass("is-stuck is-at-"+s).addClass("is-anchored is-at-"+r).css(n).trigger("sticky.zf.unstuckfrom:"+r)}},{key:"_setSizes",value:function t(i){this.canStick=Foundation.MediaQuery.atLeast(this.options.stickyOn),this.canStick||i();var s=this,e=this.$container[0].getBoundingClientRect().width,n=window.getComputedStyle(this.$container[0]),o=parseInt(n["padding-right"],10);this.$anchor&&this.$anchor.length?this.anchorHeight=this.$anchor[0].getBoundingClientRect().height:this._parsePoints(),this.$element.css({"max-width":e-o+"px"});var a=this.$element[0].getBoundingClientRect().height||this.containerHeight;this.containerHeight=a,this.$container.css({height:a}),this.elemHeight=a,this.isStuck&&this.$element.css({left:this.$container.offset().left+parseInt(n["padding-left"],10)}),this._setBreakPoints(a,function(){i&&i()})}},{key:"_setBreakPoints",value:function i(s,e){if(!this.canStick){if(!e)return!1;e()}var n=t(this.options.marginTop),o=t(this.options.marginBottom),a=this.points?this.points[0]:this.$anchor.offset().top,c=this.points?this.points[1]:a+this.anchorHeight,r=window.innerHeight;"top"===this.options.stickTo?(a-=n,c-=s+n):"bottom"===this.options.stickTo&&(a-=r-(s+o),c-=r-o),this.topPoint=a,this.bottomPoint=c,e&&e()}},{key:"destroy",value:function t(){this._removeSticky(!0),this.$element.removeClass(this.options.stickyClass+" is-anchored is-at-top").css({height:"",top:"",bottom:"","max-width":""}).off("resizeme.zf.trigger"),this.$anchor.off("change.zf.sticky"),$(window).off(this.scrollListener),this.wasWrapped?this.$element.unwrap():this.$container.removeClass(this.options.containerClass).css({height:""}),Foundation.unregisterPlugin(this)}}]),i}();i.defaults={container:"<div data-sticky-container></div>",stickTo:"top",anchor:"",topAnchor:"",btmAnchor:"",marginTop:1,marginBottom:1,stickyOn:"medium",stickyClass:"sticky",containerClass:"sticky-container",checkEvery:-1},Foundation.plugin(i,"Sticky")}(jQuery);