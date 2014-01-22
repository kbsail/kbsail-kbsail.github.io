$(document).ready(function () {
  $('.tabs li').click(function(event){
    event.preventDefault();
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('body').animate({scrollTop: 0}, 1000, function() {
          $('.tab').hide();
          });
      }
      else {
        $("li").removeClass('active');
        $(this).addClass("active");    
        $('.tab').hide();
        
        var tab_index = $(this).children('a').attr('href')
        $(tab_index).show()
        $('body').animate({scrollTop: $('.tabs').offset().top}, 1000);
      }
  });
});