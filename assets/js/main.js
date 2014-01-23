
function tabClosed(tabId) {
  if ($(tabId).css('display') === 'none') {
    return true
  } else {
    return false
  }
}

function toggleTab(activeTabId) {
  var showTab = tabClosed(activeTabId)
  $(".tab").hide();
  if (showTab === true){
    $(activeTabId).show();
  }
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