$(document).ready(function(e) {
    //$('.moduletable.keyFeture ul li').prepend('<span class="sep"><  </span>'); // ADD list style to key features
	$('.moduletable.tabs ul li').first().show(); // show the first keyfeatured
	$('.moduletable.keyFeture a').first().addClass('active');
	$('.moduletable.keyFeture ul li').append('<div class="borderBottom"></div>');
	$('.moduletable.keyFeture').append('<div class="clr"></div>'); // add clear to style
	
	$('.moduletable.keyFeture a').click(function(e) {
        e.preventDefault();
		$('.moduletable.keyFeture a').removeClass('active');
		$(this).addClass('active');
		var index = $(this).parent().index();
		$('.moduletable.tabs ul li').fadeOut(500);
		$('.moduletable.tabs ul li').eq(index).delay(500).fadeIn();
    }); // key Feture fade effect
	
	
	$('.moduletable.deployment .k2ItemsBlock  > ul ').after('<div class="clr"></div><div id="nav"></div>').cycle(
	{
		timeout: 1500,
		pager:  '#nav',
		 pause:   1
	});
	
	if($('.rightCol').size()) 
	{
		
		if($('.rightCol').height() < $('.mainContnet').height())
		{
			$('.rightCol').height($('.mainContnet').height());
		//var max_height =0 ;
//		$('.innerPage > .mainContnet, .innerPage > .rightCol').each(function(index, element) {
//			if($(this).height()>max_height)
//				max_height = $(this).outerHeight();
//		});
//		$('.innerPage > .mainContnet, .innerPage > .rightCol').height(max_height);
		}
	}
	
	$('.moduletable.keyFeture ul li').last().find('.borderBottom').remove();
	$('.moduletable_menu ul li').append("<div class='borderBottom'></div>");; 
	$('.moduletable_menu ul li').last().find('.borderBottom').remove();
	$('.readmore').after("<div class='clr'></div>"); 

	$(".wrap").height($(document).height()-140);

    $('.theMobileMenu li.deeper > a').click(function(e){
        e.preventDefault();
        $('.theMobileMenu ul ul').hide();
        $(this).next('ul').slideDown();
        $('.theMobileMenu ul li').removeClass('active')
        $(this).parent().addClass('active');
    });

    $('.footer .wrapf').click(function(e){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
    })
});