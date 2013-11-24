(function($){
    $(document).ready(function(){
        /* Search */
        $('#search').on('keyup', function(){
            $('#popularFrame').data('sly').reload();
            $('#popularFrame ul.slidee li').removeClass('active');
            $('#popularFrame').data('sly').activatePage(Math.ceil($('#popularFrame ul.slidee li').length/2));
            $('#popularFrame').data('sly').toCenter();
            /* Fix for one result */
            if ($('#popularFrame ul.slidee li').length === 1) {
                $('#popularFrame ul.slidee li').addClass('active');
            } 
        });

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

        /* Init Fancybox */
        $('.video .fancybox').fancybox({
            type: 'iframe',
            padding: 0
        });

        $('#sign-in').fancybox({
            type: 'inline',
            padding: 0,
            width: 600,
            autoSize: false,
            height:300
        });
        
    });
    
    toggleVideos = function(cls) {
        $('#video-grid .video').hide();
        $('#video-grid .video'+cls).show();
        $('#video-grid').masonry();
    }
    
})(jQuery);


// Google API

window.___gcfg = {
    lang: 'en-US',
    parsetags: 'onload'
};

(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

function signinCallback(authResult) {
    if (authResult['access_token']) {
        $.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&key=AIzaSyDWjuuBvOiQ-HU52YChjQk8l2LLNY2Hnz8&access_token='+authResult['access_token'],
        function(userProfile){
           var givenName=userProfile['given_name'];
           var familyName=userProfile['family_name'];
           $('#sign-in').text(givenName+' '+familyName).unbind('click.fb').removeData('fancybox').removeClass('fancybox').attr('href','/profile');
            $.fancybox.close();
        });
    } else if (authResult['error']) {
        // Update the app to reflect a signed out user
        // Possible error values:
        //   "user_signed_out" - User is signed-out
        //   "access_denied" - User denied access to your app
        //   "immediate_failed" - Could not automatically log in the user
        console.log('Sign-in state: ' + authResult['error']);
    }
}