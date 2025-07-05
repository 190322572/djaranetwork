$(function(){
	/*触屏*/
	$(".slider .inner").bind("swipeleft",function(){
		
	});
	
	$(".slider .inner").bind("swiperight",function(){
		
	});
	
	$('.page2 li').hover(function(){
		$(this).addClass('selected');
	},
	function(){
		$(this).removeClass('selected');
	})
	
	$('.gh').click(function(){
		if($(this).hasClass('selected')){
			$(this).removeClass('selected');
			$('#nav').addClass('hide');
		}
		else{
			$(this).addClass('selected');
			$('#nav').removeClass('hide');
		}
	})
		
//	imagesLoaded( $('body'), function(){
//		
//	})
		
//	滑屏
	$('.page-wrap').fullpage({
		//sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		anchors: ['hero', 'services', 'cases', 'news','about','contact','footer'],
		//'navigation': true,
		//'navigationPosition': 'left',
		verticalCentered: false,
		'slidesNavigation':true,
		controlArrows:false,
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.gb-header').addClass('show');
			}
			if(index == 2){
				
			

			}
			if(index == 3){
			

			}
			if(index == 4){

		
			}
			if(index == 5){
	
			}
			if(index == 6){

		
			}
			if(index == 7){
		
			}
		}
	});
		setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 5000);
})