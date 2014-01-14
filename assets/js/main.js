$(document).ready(function () {
  $('.tabs li').click(function(event){
    event.preventDefault();
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.tab').hide();
      }
      else {
        $("li").removeClass('active');
        $(this).addClass("active");    
        $('.tab').hide();
        
        var tab_index = $(this).children('a').attr('data-tab')
        $(tab_index).show()
      }
  });
});