"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}();!function($){function t(t){return t.hasClass("is-active")}var e=function(){function t(e,i){_classCallCheck(this,t),this.$element=e,this.options=$.extend({},t.defaults,this.$element.data(),i),this._init(),Foundation.registerPlugin(this,"Tabs"),Foundation.Keyboard.register("Tabs",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"previous",ARROW_DOWN:"next",ARROW_LEFT:"previous"})}return _createClass(t,[{key:"_init",value:function t(){var e=this;if(this.$tabTitles=this.$element.find("."+this.options.linkClass),this.$tabContent=$('[data-tabs-content="'+this.$element[0].id+'"]'),this.$tabTitles.each(function(){var t=$(this),i=t.find("a"),a=t.hasClass("is-active"),n=i[0].hash.slice(1),s=i[0].id?i[0].id:n+"-label",o=$("#"+n);t.attr({role:"presentation"}),i.attr({role:"tab","aria-controls":n,"aria-selected":a,id:s}),o.attr({role:"tabpanel","aria-hidden":!a,"aria-labelledby":s}),a&&e.options.autoFocus&&i.focus()}),this.options.matchHeight){var i=this.$tabContent.find("img");i.length?Foundation.onImagesLoaded(i,this._setHeight.bind(this)):this._setHeight()}this._events()}},{key:"_events",value:function t(){this._addKeyHandler(),this._addClickHandler(),this.options.matchHeight&&$(window).on("changed.zf.mediaquery",this._setHeight.bind(this))}},{key:"_addClickHandler",value:function t(){var e=this;this.$element.off("click.zf.tabs").on("click.zf.tabs","."+this.options.linkClass,function(t){t.preventDefault(),t.stopPropagation(),$(this).hasClass("is-active")||e._handleTabChange($(this))})}},{key:"_addKeyHandler",value:function t(){var e=this,i=e.$element.find("li:first-of-type"),a=e.$element.find("li:last-of-type");this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs",function(t){if(9!==t.which){t.stopPropagation(),t.preventDefault();var i=$(this),a=i.parent("ul").children("li"),n,s;a.each(function(t){if($(this).is(i))return void(e.options.wrapOnKeys?(n=0===t?a.last():a.eq(t-1),s=t===a.length-1?a.first():a.eq(t+1)):(n=a.eq(Math.max(0,t-1)),s=a.eq(Math.min(t+1,a.length-1))))}),Foundation.Keyboard.handleKey(t,"Tabs",{open:function(){i.find('[role="tab"]').focus(),e._handleTabChange(i)},previous:function(){n.find('[role="tab"]').focus(),e._handleTabChange(n)},next:function(){s.find('[role="tab"]').focus(),e._handleTabChange(s)}})}})}},{key:"_handleTabChange",value:function t(e){var i=e.find('[role="tab"]'),a=i[0].hash,n=this.$tabContent.find(a),s=this.$element.find("."+this.options.linkClass+".is-active").removeClass("is-active").find('[role="tab"]').attr({"aria-selected":"false"});$("#"+s.attr("aria-controls")).removeClass("is-active").attr({"aria-hidden":"true"}),e.addClass("is-active"),i.attr({"aria-selected":"true"}),n.addClass("is-active").attr({"aria-hidden":"false"}),this.$element.trigger("change.zf.tabs",[e])}},{key:"selectTab",value:function t(e){var i;i="object"==typeof e?e[0].id:e,i.indexOf("#")<0&&(i="#"+i);var a=this.$tabTitles.find('[href="'+i+'"]').parent("."+this.options.linkClass);this._handleTabChange(a)}},{key:"_setHeight",value:function t(){var e=0;this.$tabContent.find("."+this.options.panelClass).css("height","").each(function(){var t=$(this),i=t.hasClass("is-active");i||t.css({visibility:"hidden",display:"block"});var a=this.getBoundingClientRect().height;i||t.css({visibility:"",display:""}),e=a>e?a:e}).css("height",e+"px")}},{key:"destroy",value:function t(){this.$element.find("."+this.options.linkClass).off(".zf.tabs").hide().end().find("."+this.options.panelClass).hide(),this.options.matchHeight&&$(window).off("changed.zf.mediaquery"),Foundation.unregisterPlugin(this)}}]),t}();e.defaults={autoFocus:!1,wrapOnKeys:!0,matchHeight:!1,linkClass:"tabs-title",panelClass:"tabs-panel"},Foundation.plugin(e,"Tabs")}(jQuery);