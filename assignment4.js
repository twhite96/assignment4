(function() {
  console.log('Keepin\'n it clean with an external script!');

  var $url = $('.flexsearch-input').val() || 'http://www.mattbowytz.com/simple_api.json?data=programming';
  $('#mainForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: $url,
      method: 'GET'
    }).success(function(data) {
      console.log(data);
      var programmingArray = data.data.programming;
      var lastString = ' ';
      $.each(programmingArray, function( i ) {
        JSON.stringify(lastString[i]);
      });
    });

    //loop through the array:

  }).fail(function(data) {
    console.log(data);
  });
}());
