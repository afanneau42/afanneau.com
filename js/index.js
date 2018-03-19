$(document).ready(() => {
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
        // console.log('yPos: ' + yPos)
        // console.log('offset: ' + $('body').height())        
        // console.log('offset: ' + $('#second-div').offset().top)
        if (yPos >= $('#third-div').offset().top - ($('#third-div').height() * 0.50)) {
            $('.active').removeClass('active');
            $('#li3').parent().addClass('active');
            $('#resume_div').removeClass('introduced');
            console.log('trig 3')
        }
        else if (yPos >= $('#second-div').offset().top - ($('#second-div').height() * 0.50)) {
            $('.active').removeClass('active');
            $('#li2').parent().addClass('active');
            $('#resume_div').addClass('introduced');
            console.log('trig 2')
        }
        else if (yPos < $('#second-div').offset().top - ($('#second-div').height() * 0.50)) {
            $('.active').removeClass('active');
            $('#li1').parent().addClass('active');
            $('#resume_div').removeClass('introduced');
            console.log('trig 1')
        }
      
    })
    $('#introduce').click(() => {
        goToByScroll('second-div')
    })

    // var btn = document.querySelector('.mouse-cursor-gradient-tracking')
    // btn.onmousemove = function(e) {
    //   var x = e.pageX - btn.offsetLeft
    //   var y = e.pageY - btn.offsetTop
    //   btn.style.setProperty('--x', x + 'px')
    //   btn.style.setProperty('--y', y + 'px')
    // }

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