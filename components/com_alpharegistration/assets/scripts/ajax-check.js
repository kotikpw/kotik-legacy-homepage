var myDomain = '';

if ( document.domain!='localhost' ) {
	myDomain = /(http?:\/\/[^\/]+)/.exec(window.location.href)[1] + '/';
}

pic1 = new Image(16, 16); 
pic1.src = myDomain+"components/com_alpharegistration/assets/images/loader.gif";

$(document).ready(function(){   

	$("#username").keyup(function() { 
	
		var usr = $("#username").val();
		
		if(usr.length >= 4)
		{
			$("#statusUSR").html('<img src="'+myDomain+'components/com_alpharegistration/assets/images/loader.gif" align="absmiddle">&nbsp;Checking availability...');
			
		$.ajax({  
		type: "POST",  
		url: myDomain+"components/com_alpharegistration/assets/scripts/checkusername.php",  
		data: "username="+ usr,  
		success: function(msg){  
	   
		$("#statusUSR").ajaxComplete(function(event, request, settings){ 
				
		if(msg == 'OK')
		{ 
			$("#username").removeClass('object_error'); // if necessary
			$("#username").addClass("inputbox");
			$(this).html('&nbsp;<img src="'+myDomain+'components/com_alpharegistration/assets/images/tick.png" align="absmiddle">');
		}  
		else
		{  
			$("#username").removeClass('object_ok'); // if necessary
			$("#username").addClass("object_error");
			$(this).html(msg);
		}  
	   
	   });
	
	 } 
	   
	  }); 
	
	}
	
	});
	
	
	//--------------------------------------------------------------------
	//----------------------- USERNAME --------------
	//--------------------------------------------------------------------
	
	
	$("#username").change(function() { 
	
	var usr2 = $("#username").val();
	
		if(usr2.length < 4)
		{
			//$("#statusUSR").html('<font color="red">Username should have at least <strong>4</strong> characters.</font>');
			$("#statusUSR").html('&nbsp;<img src="'+myDomain+'components/com_alpharegistration/assets/images/warning.png" align="absmiddle">');
			$("#username").removeClass('object_ok'); // if necessary
			$("#username").addClass("object_error");
			//$("#submitter").attr("disabled", "true");
		}
	});

		
	
	//--------------------------------------------------------------------
	//----------------------- NAME --------------
	//--------------------------------------------------------------------
	
	$("#name").change(function() { 
	
	var uname = $("#name").val();
	
	if(uname.length >= 4)
	{
			$("#name").removeClass('object_error'); // if necessary
			$("#name").addClass("inputbox");
			$("#statusNAME").html('&nbsp;<img src="'+myDomain+'components/com_alpharegistration/assets/images/tick.png" align="absmiddle">');
	
	}
	else
		{
		//$("#statusNAME").html('<font color="red">Name should have at least <strong>4</strong> characters.</font>');
		$("#statusNAME").html('&nbsp;<img src="'+myDomain+'components/com_alpharegistration/assets/images/warning.png" align="absmiddle">');		
		$("#name").removeClass('object_ok'); // if necessary
		$("#name").addClass("object_error");
		}
	
	});
	
	//--------------------------------------------------------------------
	//------------ EMAIL ----------------------
	//--------------------------------------------------------------------
	
	$("#email").change(function() { 
	
	var email = $("#email").val();
	
  	p = email.indexOf('@');
	p1= email.indexOf('.');
	
	if (p<1 || p==(email.length-1) || p1<1 || p1==(email.length-1))
	{
		//$("#statusEMAIL").html('<font color="red">Enter a valid email address.</font>');
		$("#statusEMAIL").html('&nbsp;<img src="'+myDomain+'components/com_alpharegistration/assets/images/warning.png" align="absmiddle">');		
		$("#email").removeClass('object_ok'); // if necessary
		$("#email").addClass("object_error");
	}
	else
		{
			
			$("#statusEMAIL").html('<img src="'+myDomain+'components/com_alpharegistration/assets/images/loader.gif" align="absmiddle">&nbsp;Checking availability...');
			
				$.ajax({  
				type: "POST",  
				url: myDomain+"components/com_alpharegistration/assets/scripts/checkemail.php",  
				data: "email="+ email,  
				success: function(msg){  
			   
			   $("#statusEMAIL").ajaxComplete(function(event, request, settings){ 
			
				if(msg == 'OK')
				{ 
					$("#email").removeClass('object_error'); // if necessary
					$("#email").addClass("inputbox");
					$(this).html('&nbsp;<img src="'+myDomain+'components/com_alpharegistration/assets/images/tick.png" align="absmiddle">');
				}  
				else  
				{  
					$("#email").removeClass('object_ok'); // if necessary
					$("#email").addClass("object_error");
					$(this).html(msg);
				}  
			   
			   });
			
			 } 
			   
			}); 			

		}
		
	
	});
	
	
	//--------------------------------------------------------------------
	//----------------------- PASSWORD --------------
	//--------------------------------------------------------------------
	
	$("#password").change(function() { 
	
	var password = $("#password").val();
	
	if(password.length >= 6)
	{
			$("#password").removeClass('object_error'); // if necessary
			$("#password").addClass("inputbox");
			$("#statusPASSWORD").html('&nbsp;<img src="'+myDomain+'components/com_alpharegistration/assets/images/tick.png" align="absmiddle">');
	
	}
	else
		{
		//$("#statusPASSWORD").html('<font color="red">Password should have at least <strong>6</strong> characters.</font>');
		$("#statusPASSWORD").html('&nbsp;<img src="'+myDomain+'components/com_alpharegistration/assets/images/warning.png" align="absmiddle">');		
		$("#password").removeClass('object_ok'); // if necessary
		$("#password").addClass("object_error");
		}
	
	});
	
	//--------------------------------------------------------------------
	//----------------------- PASSWORD2 --------------
	//--------------------------------------------------------------------
	
	$("#password2").change(function() { 
	
	var password = $("#password").val();
	var password2 = $("#password2").val();
	
	if(password2==password)
	{
			$("#password2").removeClass('object_error'); // if necessary
			$("#password2").addClass("inputbox");
			$("#statusPASSWORD2").html('&nbsp;<img src="'+myDomain+'components/com_alpharegistration/assets/images/tick.png" align="absmiddle">');
	
	}
	else
		{
		//$("#statusPASSWORD2").html('<font color="red">Please enter the same password as above.</font>');
		$("#statusPASSWORD2").html('&nbsp;<img src="'+myDomain+'components/com_alpharegistration/assets/images/warning.png" align="absmiddle">');		
		$("#password2").removeClass('object_ok'); // if necessary
		$("#password2").addClass("object_error");
		}
	
	});
	
	
	//------------------------------------------------------------------------------------------------
	//----------------------- REFERRAL CODE USER TO ALPHAUSERPOINTS COMPONENT --------------
	//------------------------------------------------------------------------------------------------
	
	
	$("#referrer").change(function() { 
	
		var referral = $("#referrer").val();
		referral = referral.replace(/^\s+/g,'').replace(/\s+$/g,'');
		
		if ( referral.length >= 1  ) {
	
			$("#statusREFERRAL").html('<img src="'+myDomain+'components/com_alpharegistration/assets/images/loader.gif" align="absmiddle">&nbsp;Checking availability...');
			
				$.ajax({  
				type: "POST",  
				url: myDomain+"components/com_alpharegistration/assets/scripts/checkreferrer.php",  
				data: "referrer="+ referral,  
				success: function(msg){  
			   
			   $("#statusREFERRAL").ajaxComplete(function(event, request, settings){ 
			
				if(msg == 'OK')
				{ 
					$("#referrer").removeClass('object_error'); // if necessary
					$("#referrer").addClass("inputbox");
					$(this).html('&nbsp;<img src="'+myDomain+'/components/com_alpharegistration/assets/images/tick.png" align="absmiddle">');
				}  
				else  
				{  
					$("#referrer").removeClass('object_ok'); // if necessary
					$("#referrer").addClass("object_error");
					$(this).html(msg);
				}  
			   
			   });
		
			 } 	   
			});
			
		} 
		else {
			$("#statusREFERRAL").html('');
			$("#referrer").removeClass('object_error'); // if necessary
			$("#referrer").addClass("inputbox");
		}			
			
	});	
	
	
	//------------------------------------------------------------------------------------------------
	//----------------------- REFERRAL COUPON CODE TO ALPHAUSERPOINTS COMPONENT --------------
	//------------------------------------------------------------------------------------------------
	
	
	$("#couponcode").change(function() { 
	
		var couponcode = $("#couponcode").val();
		couponcode = couponcode.replace(/^\s+/g,'').replace(/\s+$/g,'');
		
		if ( couponcode.length >= 1  ) {
	
			$("#statusCOUPONCODE").html('<img src="'+myDomain+'components/com_alpharegistration/assets/images/loader.gif" align="absmiddle">&nbsp;Checking availability...');
			
				$.ajax({  
				type: "POST",  
				url: myDomain+"components/com_alpharegistration/assets/scripts/checkcouponcode.php",  
				data: "couponcode="+ couponcode,  
				success: function(msg){  
			   
			   $("#statusCOUPONCODE").ajaxComplete(function(event, request, settings){ 
			
				if(msg == 'OK')
				{ 
					$("#couponcode").removeClass('object_error'); // if necessary
					$("#couponcode").addClass("inputbox");
					$(this).html('&nbsp;<img src="'+myDomain+'components/com_alpharegistration/assets/images/tick.png" align="absmiddle">');
				}  
				else  
				{  
					$("#couponcode").removeClass('object_ok'); // if necessary
					$("#couponcode").addClass("object_error");
					$(this).html(msg);
				}  
			   
			   });
		
			 } 	   
			});
			
		} 
		else {
			$("#statusCOUPONCODE").html('');
			$("#couponcode").removeClass('object_error'); // if necessary
			$("#couponcode").addClass("inputbox");
		}			
			
	});	
	
});
