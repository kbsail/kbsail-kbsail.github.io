$(document).ready(function () {
  $('.tabs li').click(function(event){
    event.preventDefault();
    $self = $(this)
    if($self.hasClass('active')){
      var openTab = false;
    } else {
      var openTab = true;
    };
    if($('.active').length > 0) {
      $(".active").removeClass('active');
      $('body').animate({scrollTop: 0}, 700, function() {
        $('.tab').hide();
      });  
    }
    if(openTab === true) {
      $self.addClass("active");
      var showTab = $self.children('a')[0].getAttribute("href")
      $(showTab).show();
      $('body').animate({scrollTop: $('.tabs').offset().top}, 700);
    }
  });
});