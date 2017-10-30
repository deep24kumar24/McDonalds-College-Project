$(document).ready(function(){

	var count = 0;
	var selectedItems = [];
	var charges = [];
	var quantity = [];
	var totalCharges = 0.0;
	$("#btnCheckout").addClass('btnDisabled');

	$("#nav_ourMenu").click(function(){
		if($("#Mycart").hasClass("active"))
		{
			$("#Mycart").removeClass("active");
			$("#cart").slideUp("slow");
		}
		if($(this).hasClass("active"))
		{
			$(this).removeClass("active");
			$("#menu").slideUp("slow");
		}
		else
		{
			$(this).addClass("active");
			$("#menu").slideDown("slow");
		}
	});

	$(".item").click(function(){
		count = count+1;
		$("#count").text(""+count);
		var mytext = ($(this).text());
		var res = mytext.split("$");
		var check = jQuery.inArray(res[0], selectedItems);
		if (check == -1) {
			selectedItems.push(res[0]);
			charges.push(res[1]);
			quantity.push(1);
		}
		else{
			quantity[check] = quantity[check] + 1;
		}
		$("#btnCheckout").removeClass('btnDisabled');
		totalCharges = totalCharges + parseFloat(res[1]);
	
	});

	$("#Mycart").click(function(){
		$("#cartTable tbody tr").remove();
		$("#trate").html("$"+totalCharges);
		for (var i = 0; i < selectedItems.length; i++) {
			$("#cartTable tbody").append('<tr><td>'+selectedItems[i]+'</td><td>'+quantity[i]+'</td><td>$ '+(quantity[i]*charges[i])+'</td></tr>');			
		}
		if($("#nav_ourMenu").hasClass("active"))
		{
			$("#nav_ourMenu").removeClass("active");
			$("#menu").slideUp("slow");
		}
		if($(this).hasClass("active"))
		{
			$(this).removeClass("active");
			$("#cart").slideUp("slow");
		}
		else
		{
			$(this).addClass("active");
			$("#cart").slideDown("slow");
		}
	});


	$("#btnCheckout").click(function(event) {
		/* Act on the event */
		if (!$(this).hasClass('btnDisabled')) {
		    alert("Your Order will be delivered soon.\nThanks for Ordering here.");
		    location.reload();
		}
	});




	

});