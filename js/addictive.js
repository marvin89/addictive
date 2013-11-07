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
            startAt: 5,
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
        
        /* Masonry videos */
        $('#video-grid').masonry({
            columnWidth: 240,
            itemSelector: '#video-grid .video',
            gutter: 20,
            isFitWidth: true,
            isAnimated: true
        });  
        
    })
    
    toggleVideos = function(cls) {
        $('#video-grid .video').hide();
        $('#video-grid .video'+cls).show();
        $('#video-grid').masonry();
        
    }
    
})(jQuery);