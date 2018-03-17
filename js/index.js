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
    
    // $(window).scroll(() => {
    //     let yPos = $(window).scrollTop()
    //     console.log( 20 - (yPos / $('body').height()) * 20)
    //     $('body').attr('style', 'background-color: hsl(0, 0%, '+ (15 -(yPos / $('body').height()) * 15) +'%)')
    // })
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
})