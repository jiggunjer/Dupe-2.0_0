

jQuery(document).ready(function ($) {


	var t;

	function saveOptions()
	{
	    localStorage["windowOption"] = $("#windowOption").val();
	    clearTimeout(t);
	    $(".alert").show();
	    t = setTimeout(function () {
	        $(".alert").slideUp();
	    }, 1500);
	}




	$("#saveButton").click(function(e) {
			e.preventDefault();
	    saveOptions();
	});
	$("#closeButton").click(function(e) {
		e.preventDefault();
		window.close();
	})

	var a = localStorage["windowOption"];
	a || (a = "0");
	$("#windowOption").val(a);


	$("#windowOption").change(function (){
	    saveOptions();
	});


});


