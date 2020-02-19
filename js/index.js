(function($) {
	var _this_ = this;
	var init = function(options) {
		var vokeIndex = options.invoke;
		var objName = options.name;
		var oBj = $(objName);
		var behav = options.behavior;
		var effect = options.effect;
		var tabLi = oBj.find('.tab-nav li');
		var tabCon = oBj.find('.content-wrap div.content-item');
		var time=options.time;
		invokeCheck(vokeIndex, oBj); //显示第几个检测
		behaviorCheck(oBj, behav); //行为检测	
		if(time){
			var timer=null;			
			autoPlay(options)//自动切换
			oBj.find('.tab-nav li').hover(function(){
				console.log(1)
				window.clearInterval(timer);
				console.log(2)
			},function(){
				autoPlay(options)
			})
		}
		function autoPlay(options){
			var tabLi = oBj.find('.tab-nav li');
			var tabCon = oBj.find('.content-wrap div.content-item');
			var loop=vokeIndex;
			tabliLength=tabLi.size();
			timer=window.setInterval(function(){
				loop++;
				if(loop>=tabliLength){
					loop=0;
				}
				fadeBe(oBj, loop)
			},time)
		}
		function effectCheck(oBj, vokeIndex) {
			if(effect === 'fade') {
				fadeBe(oBj, vokeIndex)
			} else if(effect === 'default' || effect != 'fade') {
				invokeCheck(vokeIndex, oBj);
			}
		}

		function behaviorCheck(oBj, behav) {
			if(behav === 'click') {
				clickFun(oBj);
			} else if(behav === 'mouseover' || behav != 'click') {
				hoverFun(oBj);
			}
		};

		function clickFun(oBj) {
			oBj.find('.tab-nav li').on('click', function() {
				var vokeIndex = $(this).index();
				effectCheck(oBj, vokeIndex); //切换效果检测
			})
		};

		function hoverFun(oBj) {
			oBj.find('.tab-nav li').on('mouseover', function() {
				var vokeIndex = $(this).index();
				effectCheck(oBj, vokeIndex); //切换效果检测
			})
		}

		function fadeBe(oBj, vokeIndex) {
			var tabLi = oBj.find('.tab-nav li');
			var tabCon = oBj.find('.content-wrap div.content-item');
			tabLi.eq(vokeIndex).addClass('actived').siblings().removeClass('actived');
			tabCon.eq(vokeIndex).fadeIn().siblings().fadeOut();
		}

		function invokeCheck(vokeIndex, oBj) {
			var tabLi = oBj.find('.tab-nav li');
			var tabCon = oBj.find('.content-wrap div.content-item');
			tabLi.eq(vokeIndex).addClass('actived').siblings().removeClass('actived');
			tabCon.eq(vokeIndex).addClass('current').siblings().removeClass('current');
		}
	};

	$.fn.tabChange = function(options) {
		init(options);
	}
})(jQuery)