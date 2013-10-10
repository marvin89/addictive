(function($){
    $(document).ready(function(){
        /* Toggle buton in group */
        $(".btn-group a").on('click', function() {
            $(this).siblings().removeClass("active").end().addClass("active");
            var cls = $(this).attr('rel');
            toggleVideos(cls);
        });
        
        /* Init Sly */
        $('#popularFrame').sly({
            horizontal: 1,
            itemNav: 'forceCentered',
            activateMiddle: 1,
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 9,
            scrollBar: $('.popular .scrollbar'),
            scrollBy: 1,
            speed: 300,
            moveBy: 600,
            elasticBounds: 1,
            dragHandle: 1,
            dynamicHandle: 1,
            clickbar: 1,

            // Buttons
            forward: $('.popular .forward'),
            backward: $('.popular .backward'),
            prev: $('.popular .prev'),
            next: $('.popular .next')
        });

        /* Sly button mapping */
        $('.popular').on('click', 'button[data-action]', function () {
            var action = $(this).data('action');
            $('#popularFrame').sly(action);
        });
        
        /* Inhibit click on link */
        $('#popularFrame ul li a.fancybox').click(function(e){
            e.preventDefault();
            
            /* Fancybox video load */
            if ($(this).parents('li').hasClass('active')) {
                $(this).fancybox({
                    overlayOpacity: 0.3,
                    scrolling: 'no',
                    type: 'iframe',
                    live: false
                });
            }
            
//            $(this).unbind('click.fb-start');
        });
        
        /* Masonry videos */
        $('#video-grid').masonry({
            columnWidth: 60,
            itemSelector: '#video-grid .video',
            gutter: 30
        });  
        
    })
    
    toggleVideos = function(cls) {
        $('#video-grid .video').hide();
        $('#video-grid .video'+cls).show();
        $('#video-grid').masonry();
        
    }
    
})(jQuery);