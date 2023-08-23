$(document).ready(function(){
    $("#slider").owlCarousel({
        loop: true,
        margin: 20,
        autoplayTimeout: 5000,
        autoplay: true,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    });

    $('.btn-modal').click(function(){
        $.fancybox.open({
            src: '#modal',
            type: 'inline'
        });
    });

    $('#subscribe').on('click', function(){
        const btn = $(this);
        $.ajax({
            method: 'POST',
            url: 'server/index.php',
            dataType: 'text',
            data: {
                email: $('input[name="subscribe-email"]').text()
            }
        })
        .done(function (res) {
            btn.text(res);
            btn.addClass('complete');
        });
    })

    
  });