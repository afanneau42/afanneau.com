$(document).ready(() => {
    let third_slide_state = 0;
    function animation_third_slide() {
        if (third_slide_state === 0) {
            third_slide_state = 1;
            $('#test2').css('background', '#2c2c36');
            // $('#test2').css('top', '0');
            
        }
    }

    function goToByScroll(id){
        id = id.replace("link", "");
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top},
            'slow', 'easeOutCirc', () => {
                // $('#'+id).animate({
                    // attr: },
                    // 'slow')
                }
            );
    }

    $(this).scrollTop(0);

    $(window).scroll(() => {
        let yPos = $(window).scrollTop()
        if (yPos < 20) {
            $('#introduce').addClass('prevent-hiding-url-bot');
            $('#project-button').addClass('prevent-hiding-url-bot');            
        }
        else {
            $('#introduce').removeClass('prevent-hiding-url-bot');
            $('#remove').addClass('prevent-hiding-url-bot');                        
        }
        if (yPos >= $('#third-div').offset().top - ($('#second-div').height() * 0.15)) {
            $('.active').removeClass('active');
            $('#li3').parent().addClass('active');
            $('#resume_div').removeClass('introduced');
            $('#attributes').addClass('attributes_before');            
            $('#project-button').css('opacity', '0');        
            animation_third_slide();
        }
        else if (yPos >= $('#second-div').offset().top - ($('#second-div').height() * 0.50)) {
            $('.active').removeClass('active');
            $('#li2').parent().addClass('active');
            $('#resume_div').addClass('introduced');
            $('#attributes').removeClass('attributes_before');            
            $('#project-button').css('opacity', '0.8')              
        }
        else if (yPos < $('#second-div').offset().top - ($('#second-div').height() * 0.50)) {
            $('.active').removeClass('active');
            $('#li1').parent().addClass('active');
            $('#resume_div').removeClass('introduced');
            $('#attributes').addClass('attributes_before'); 
            $('#project-button').css('opacity', '0');  
        }
      
    })
    $('#introduce').click(() => {
        goToByScroll('second-div')
    });
    $('#project-button').click(() => {
        goToByScroll('third-div');
        animation_third_slide();
    });

    $('.dots li').click(function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
    });

    $('#li1').click(function() {
        goToByScroll('first-div')
    })
    $('#li2').click(function() {
        goToByScroll('second-div')
    })
    $('#li3').click(function() {
        goToByScroll('third-div')
    })
})