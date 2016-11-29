
(function() {
  console.log('Keepin\'n it clean with an external script!');
  var lastString = ' ';
  var $url = $('.flexsearch-input').val() || 'http://www.mattbowytz.com/simple_api.json?data=programming';
  $('#mainForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: $url,
      method: 'GET'
    }).success(function(data) {
      var programmingArray = data.data.programming;
      $.each(programmingArray, function( i ) {
        JSON.stringify(lastString[i]);
      });
    });

  }).fail(function(data) {
    console.log(lastString);
  });
}());
