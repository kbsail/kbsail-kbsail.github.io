//   var Section = function(el){
//     var self = this;
//     this.$el = el;

//     this.$el.on('click', function(e) {
//       e.preventDefault();
//       this.toggle();
//     })
//   }

// $(function() {
//   $('.section-row').hide();
//   $('#lprojects').on('click', function(e){
//     $('#projects').toggle();
//   })
//   $('#lexperience').on('click', function(e){
//     $('#experience').toggle();
//   })
// });


$(document).ready(function () {
  $('.tabs li').click(function(event){
    $("li").removeClass('active');
    $(this).addClass("active");    
    $('.tab').hide();
    $('.tab').each(function (index, element) {
      console.log(index + ": " + $(element).attr('id'))
    });
    var tab_index = $(this).children('a').attr('href')
    $(tab_index).show()
    
  });
});