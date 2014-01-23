
function tabClosed(tabId) {
  return ($(tabId).css('display') === 'none');
}

function toggleTab(activeTabId) {
  var showTab = tabClosed(activeTabId)
  $(".tab").hide();
  if(showTab === true){ $(activeTabId).show(); }
}

function clickFunction(event){
  event.on('click', function() {
    var activeTabId = $(this).data('section');
    toggleTab(activeTabId);
  })
}

$(document).ready(function () {
  var jqObject = $('.tabs li');
  clickFunction(jqObject);
});