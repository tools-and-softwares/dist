function load_head(){
	load_part('./inc/head.html',function(response){
		document.querySelector('head').innerHTML += response;
	});
}
function load_header(){
	load_part('./inc/header.html',function(response){
		document.querySelector('header').innerHTML += response.replace(/{{title}}/g,title);
	});	
}
function load_foot(){
	load_part('./inc/foot.html',function(response){
		document.querySelector('body').innerHTML += response;
	});	
}
function load_footer(){
	load_part('./inc/footer.html',function(response){
		document.querySelector('footer').innerHTML += response;
	});	
}

function load_part(url,callback){
	var request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.onload = function() {
	  if (request.status >= 200 && request.status < 400) {
	    var resp = request.responseText;
	    callback(resp);
	    //document.querySelector('#div').innerHTML = resp;
	  }
	};
	request.send();
}
load_foot();
load_head();
load_header();
load_footer();