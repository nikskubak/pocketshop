var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxZDgMbC6g85j8nwT5B5WShz1-SWkMJC0aTNDoR3RbnNUHdT7M/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "POST",
    dataType: "json",
    data: $form.serializeObject()
  }).success(function(data) {
    $form[0].reset();
  }
  );
})
