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
        
<<<<<<< HEAD
=======
        /* Inhibit click on link */
        $('#popularFrame ul li a.fancybox, #video-grid .video a.fancybox').fancybox({
            overlayOpacity: 0.3,
            scrolling: 'no',
            type: 'iframe',
            live: false
        });

>>>>>>> origin/Mircea
        /* Masonry videos */
        $('#video-grid').masonry({
            columnWidth: 200,
            itemSelector: '#video-grid .video',
<<<<<<< HEAD
            gutter: 20,
            isFitWidth: true,
            isAnimated: true
=======
            gutter: 25
>>>>>>> origin/Mircea
        });  
        
    })
    
    toggleVideos = function(cls) {
        $('#video-grid .video').hide();
        $('#video-grid .video'+cls).show();
        $('#video-grid').masonry();
        
    }
    
})(jQuery);