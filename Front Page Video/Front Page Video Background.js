// script and code to embed a video as the title page on a Squarespace site.
// Just need to put on the parent directory of the front page. (Usually named "Home")
// Paste everything below into the code injection under "Advanced" once you have the video uploaded.

<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
 <script type="text/javascript">
      $(window).bind("load", function() {
        if( /Android|webOS|iPad|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        } else {
          var banner = $('#pageWrapper img').first();
          if (banner.length === 0)
            banner = $('.banner-thumbnail-wrapper > #thumbnail > img').first();
          if (banner.length === 0)
            banner = $('#parallax-images img').first();
          if (banner.length === 0)
            banner = $('.has-main-image img').first();
          if (banner.length === 0)
              banner = $('#page-thumb img').first();

          var url = "http://andrew-wilde-ladp.squarespace.com/s/Kingdom-Come-Impact-2016-Promo.mp4";
          banner.hide();
          $('<video class="bannerVideo" autoplay="" loop="" preload><source src="' + url + '" type="video/mp4"></video>').insertAfter(banner);

          var mute = $("<div>Mute</div>");
mute.css({
    position: 'absolute',
    bottom: '15px',
    'font-size': '36px',
    right: '15px',
    color: 'white',
    'z-index': 100,
    'text-shadow':'2px 2px 3px rgba(0,0,0,.5)',
    'border': 'solid 1px #fff',
    'padding': '10px',
    'cursor': 'pointer'
});
mute.click(function() {
    var video = $('.bannerVideo');
    var nextMute = !video.prop('muted');
    video.prop('muted', nextMute);
    mute.text(nextMute ? "Unmute" : "Mute");

});
mute.insertBefore($('#footer'));

          adjustBanner($('.bannerVideo'), banner);
          setTimeout(function() {
            adjustBanner($('.bannerVideo'), banner);
          }, 2000);
          $(window, banner).resize(function() {
            adjustBanner($('.bannerVideo'), banner);
            setTimeout(function() {
              adjustBanner($('.bannerVideo'), banner);
            }, 200);
          });
        }
        function adjustBanner (video, banner) {
          video.css({
            height: banner.css('height'),
            width: banner.css('width'),
            top: banner.css('top'),
            left: banner.css('left'),
            position: 'relative',
            'object-fit': 'inherit'
          });
        }
      });

    </script>
