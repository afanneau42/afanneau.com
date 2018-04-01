$(document).ready(() => {
    let projState = 0;
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-116543471-1');

    let third_slide_state = 0;
    function animation_third_slide() {
        if (third_slide_state === 0) {
            third_slide_state = 1;
            $('#test2').css('background', '#2c2c36');
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

    sizeProj()

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
        if (yPos >= $('#fourth-div').offset().top - ($('#second-div').height() * 0.15)) {
            $('.active').removeClass('active');
            $('#li4').parent().addClass('active');
            $('#resume_div').removeClass('introduced');
            $('#attributes').addClass('attributes_before');            
            $('#project-button').css('opacity', '0');        
            // animation_fourth_slide();
        }
        else if (yPos >= $('#third-div').offset().top - ($('#second-div').height() * 0.15)) {
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
    $('#li4').click(function() {
        goToByScroll('fourth-div')
    })

    
    var width = $(window).width();
    $(window).on('resize', function(){
       if($(this).width() != width){
            width = $(this).width();
            $(window).resize(sizeProj());
       }
    });
    function sizeProj() {
        if ($(window).width() >= 990 && projState != 2) {
            projState = 2;
            $("#proj-info-2-2").empty();
            $("#proj-info-4-2").empty();       
            $("#proj-info-4-1, #proj-info-2-1").addClass('col-proj-inf')    
            $("#proj-info-4-2, #proj-info-2-2").removeClass('col-proj-inf')    
            $("#proj-info-2-1").append("\
                <div class='div-proj-info'>\
                    <h5> Second web project at 42. A website like meetic, find someone around you with same interests, match with him to begin to chat.</h5>\
                    <h4> NodeJS, JS, mySQL</h4>\
            ")
            $("#proj-info-4-1").append("\
                <div class='div-proj-info'>\
                    <h5> WIP Side project where I try to improve my skill in webdesign, you are currently navigating on it, do you like it ?</h5>\
                    <h4> NodeJS, JS, CSS, Bootstrap</h4>\
            ");
            $('#img_linkedin').attr('src', '/ressources/linkedin_icon.png');
            $('#img_github').attr('src', '/ressources/github_icon.png');
        } else if ($(window).width() < 990 && projState != 1) {
            projState = 1;
            $("#proj-info-2-1").empty();
            $("#proj-info-4-1").empty();        
            $("#proj-info-4-1, #proj-info-2-1").removeClass('col-proj-inf');    
            $("#proj-info-4-2, #proj-info-2-2").addClass('col-proj-inf');    
            $("#proj-info-2-2").append("\
                <div class='div-proj-info'>\
                    <h5> Second web project at 42. A website like meetic, find someone around you with same interests, match with him to begin to chat.</h5>\
                    <h4> NodeJS, JS, mySQL</h4>\
            ");
            $("#proj-info-4-2").append("\
                <div class='div-proj-info'>\
                    <h5> WIP Side project where I try to improve my skill in webdesign, you are currently navigating on it, do you like it ?</h5>\
                    <h4> NodeJS, JS, CSS, Bootstrap</h4>\
            ");
            $('#img_linkedin').attr('src', '/ressources/linkedin_icon_32.png');
            $('#img_github').attr('src', '/ressources/github_icon_32.png');
        }
    }

    $('#contact_mail').click(e => {
        if ($('#contact_mail').text() === 'afanneau@student.42.fr') {
            var $temp = $('<input>');
            $("body").append($temp);
            $temp.val($('#contact_mail').text()).select();
            document.execCommand("copy");
            $temp.remove();
            $('#contact_mail').text('copied !')
        }
        else {
            $('#contact_mail').text('afanneau@student.42.fr')
        }
    })
})