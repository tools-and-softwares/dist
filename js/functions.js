function submit_form(form,callback){
	
	var action = $(form).attr('action');
	var method = $(form).attr('method');
	var multipart = $(form).attr('enctype');
	if(multipart){
		process_form_multipart(action,method,form,callback);
	}else{
		process_form(action,method,form,callback);
	}
	return false;
};
function process_form(action,method,form,callback){
	var data = new FormData(form);
	var submit = $('[type="submit"]',form);
	var response = $('.response',form);
	console.log('ee');

}
function process_form_multipart(action,method,form,callback){
	var fdata = new FormData(form);
	var $submit = $('[type="submit"]',form);
	var $response = $('.response',form);
	$submit.attr('disabled',1);
	$response.html('Please Wait...');
	$.ajax({
        url: action,
        type: 'POST',
        data: fdata,
        success: function (data) {
        	$submit.removeAttr('disabled');
            //$response.html(data.response);
            callback(data,form,$submit,$response);
			$response.html(' ');
        },
        cache: false,
        contentType: false,
        processData: false,
        error:function(){
        	$submit.removeAttr('disabled');
			$response.html('Error');
        }
    });
}

function save_file(string, filename){
	var blob = new Blob([string], {type:'text/plain'});
	var downloadLink = document.createElement("a");
	downloadLink.download = filename;
	if (window.webkitURL != null){
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(blob);
	}else{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(blob);
		//downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
  	}
  	downloadLink.click();
}