// function submit($e) {
//   var $form = $('form#test-form'),
//       // url = 'https://script.google.com/macros/s/AKfycbxZDgMbC6g85j8nwT5B5WShz1-SWkMJC0aTNDoR3RbnNUHdT7M/exec'
//         url = 'http://api.premiumsale.com.ua'
//   $e.preventDefault()
//   var jqxhr = $.ajax({
//     url: url,
//     method: "GET",
//     dataType: "json",
//     data: $form.serializeObject()
//   }).done(
//     function(response){
//       console.log(response);
//     }
//   ).fail(
//     function(response){
//       console.log(response);
//     }
//   );
//   return false;
// }

var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxZDgMbC6g85j8nwT5B5WShz1-SWkMJC0aTNDoR3RbnNUHdT7M/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
