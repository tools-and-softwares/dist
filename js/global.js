/*$.ajax({
     url: "https://geolocation-db.com/jsonp",
     jsonpCallback: "callback",
     dataType: "jsonp",
     success: function(location) {
          $('.country').val(location.country_name);
          $('.state').val(location.state);
          $('.city').val(location.city);
          geo = 1;
     }
});
*/

var report_modal = document.getElementById('report-a-problem');
report_modal.addEventListener('show.bs.modal', function (event) {
     //console.log('rrr')
     if(form_loaded == 0){
          $('iframe',event.target).attr('src',$('iframe',event.target).attr('data-src'));
          form_loaded = 1;
     }
})