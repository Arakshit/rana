<?php

$strenc2= $_GET['data'];
$arr = unserialize(base64_decode(urldecode($strenc2)));

echo "<pre>";
print_r($arr);
echo "</pre>";
?>

<?php 
$city_data=explode(',', $city_id); 
$city=$this->mastermodel->dropdownValue('cities','city_id','city_name'); 
$options = array(
          '0' => '',
           );
		   foreach ($city as $key => $value) {
			   $options[$key]	=	$value;
		   }
   $inputfield1	=	"class = 'password js-data-example-ajax' id='contact_id' multiple='multiple'";
  // echo $city_id;
   echo form_dropdown("city[]",$options,$city_data , $inputfield1);		
?>

	
/*----------start-----*/
  <script type="text/javascript">
  function cs_subject(sel) {
   //alert(sel.value);
   var change=sel.value;
    $.ajax({
		type : 'POST',
		dataType : 'json',
		url : '<?php echo site_url();?>/ajax/ajax_search',
		data : {
		   cs_id     :   change
		},
		success:function(response){
			 
          $('#subject_id').html(response.Str);
		},
		error : function(){
			alert('error');
		}
	});
}
</script> 


drop down onchange event ajax callable
<?php
 public function ajax_search()
	{
			$change_sub    =  $_REQUEST['cs_id'];
			$str='';
		     if($change_sub){
		    	$query=$this->db->select('*')
             ->from('subject')
			 ->where('is_subsidiary',$change_sub)
             ->get();
               $result=$query->result_array();
			    
			   if($result){
			   	foreach ($result as $key => $value) {
			   		$str.='<option value="'.$value['id'].'">'.$value['name'].'</option>';
					   
				   }
			   	
			   }
			  // print_r($result);
		    }
			echo json_encode(array('Str' => $str));
     }
<select class="form-control" onchange="cs_subject(this);" name="chosse_c_s" id="chosse_c_s" autocomplete="off">	
/*-------end start----*/	


/*All ajax lettercrank  */
function ajax_active (argument,argument2) {
 //  alert(argument);
  var j= jQuery.noConflict();
   j.ajax({
		type : 'POST',
		dataType : 'json',
		url : SITEURL1+'create-user/create_user/is_active',
		data : {
		    id        :   argument,
		    isact     :   argument2
		},
		success:function(response){
			 //$('.per['+val+']').html(response.Str);
			 var pc='.td'+argument;
			 j(pc).html(response.Str);
		},
		error : function(){
			alert('error');
		}
	});
}
 
function ajaxsearch()
{  
	// alert(222);
	var name=j('#Search').val()
	j.ajax({
		type : 'POST',
		dataType : 'json',
		url : SITEURL+'ajax/ajax_search',
		data : {
		   name     :   name
		},
		success:function(response){
			 
          j('#showTemplates').html(response.Str);
		},
		error : function(){
			alert('error');
		}
	});
} 
function userTemp(argument)
{  
	// alert(argument);
	var name=j('#Search').val()
	j.ajax({
		type : 'POST',
		dataType : 'json',
		url : SITEURL+'user_template/nestTemplate',
		data : {
		   offset     :   argument
		},
		success:function(response){
			 
          j('.abc').html(response.Str);
		},
		error : function(){
			alert('error');
		}
	});
}

function userApproved(argument)
{  
	// alert(argument);
	var name=j('#Search').val()
	j.ajax({
		type : 'POST',
		dataType : 'json',
		url : SITEURL+'user_template/nestApproveTemplate',
		data : {
		   offset     :   argument
		},
		success:function(response){
			 
          j('.Approved').html(response.Str);
		},
		error : function(){
			alert('error');
		}
	});
}

j(document).ready(function(){
	j('#Search').keydown(function (e){
		var name=j('#Search').val()
    if(e.keyCode == 13){
       // alert('you pressed enter ^_^');
        j.ajax({
		type : 'POST',
		dataType : 'json',
		url : SITEURL+'ajax/ajax_search',
		data : {
		   name     :   name
		},
		success:function(response){
			 
          j('#showTemplates').html(response.Str);
		},
		error : function(){
			alert('error');
		}
	});
    }
});
});
 
j(document).ready(function(){
	j('#Search_temp').keydown(function (e){
		var name=j('#Search_temp').val();
    if(e.keyCode == 13){
       // alert('you pressed enter ^_^');
        j.ajax({
		type : 'POST',
		dataType : 'json',
		url : SITEURL+'template/ajax_search',
		data : {
		   name     :   name
		},
		success:function(response){
			//alert(j('#edittemplate').html(response.Str));
			 
          j('#edittemplate').html(response.Str);
		},
		error : function(){
			alert('error');
		}
	});
    }
});
});
function searchtemplate()
{  
	// alert(222);
	var name=j('#Search_temp').val();
	j.ajax({
		type : 'POST',
		dataType : 'json',
		url : SITEURL+'template/ajax_search',
		data : {
		   name     :   name
		},
		success:function(response){
			 
          j('#edittemplate').html(response.Str);
		},
		error : function(){
			alert('error');
		}
	});
} 

/*   ---end all ajax lettercrank  */


/*  template approve ------ */
function approve(val1,val2)
{
	// alert(val1+'  '+val2);
	
	 j.ajax({
		type : 'POST',
		dataType : 'json',
		url : SITEURL1+'template_form/view_fields/fields',
		data : {
			id          :   val1,
		    is_aprove   :   val2
		},
		success:function(response){
			 //$('.per['+val+']').html(response.Str);
			 var pc='.'+val1;
			 j(pc).html(response.Str);
		},
		error : function(){
			alert('error');
		}
	});
}

 
<!-- end template approve ------>

<!------email validation---->
function checkEmail(email) {

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {
	    return false;
	 }else{
	 	return true;
	 }
}


<!-----end email------>

/*--get value and delete -----*/
<script>
 	var final = '';
	j1('#del_all').click(function(){
    j1('.checkbox1:checked').each(function(){        
        var values = j1(this).val();
        final += values + ',';
    });
    //alert(final);
		var del=confirm("Do You really want to delete?");
		if(del){
		jQuery.ajax({
			type : 'POST',
			url : '<?php echo site_url(); ?>admin/template_form/template/delete_data',
			data : {
			act : "delete_data",
			delete_id: final,
			},
			success : function(response) {
			if(response=="error"){
			}else{
			window.location.href = "<?php echo site_url(); ?>admin/template_form/template/listtemplate";
				//$('#del_id-'+delete_id).remove();
			}
		}
	});
  }
});
</script>
<!---------end get value---->
<?php 
$aaa=array();
$kk_update	=	"";
$kk_insert	=	"";
$aa	=	"50|288|1 , 50|288|9 ,50|288|10 , 50|312|6,50|312|7,50|312|9,";
$aaa	=	substr($aa, 0, -1);
$bb	=	explode(",",$aaa);
for ($i=0; $i <count($bb) ; $i++) { 
	$cc	=	explode("|",$bb[$i]);
	///select
	//if match then update 
	if($cc[0]==50&&$cc[1]==288 && $cc[2]==5){
		$kk_update	= '$date_update';
		echo "rana";
		//status update
	}else{
		$apis=$cc[1];
		$kk_insert	=	'$date_insert';
		echo "rana_ins";
		//status insert
	}
	//echo $kk;
	echo "<pre>";
	print_r ($cc);
	echo "</pre>";
}

?>
//---------get checkbox id //
<script>
	$('#get_all').click(function(){
		var final = '';  
    $('.checkbox:checked').each(function(){ 
        var values = $(this).val();
        final += values + ',';
    });
     //alert(final);
     $('#update_level').val(final);
  });
</script>
//-----------get button id and value//
<script>
function buton_click (offset) {
  alert(offset.value);
   var data	=	offset.value;
  $('#get_note_id').val(data);
}
 another
 
 $('#radio_button').attr("checked", "checked");
 
 //----------disabled class---:
 function checkbox_click(arg) {
	 var chkval		=	arg.value;
	 alert(chkval);
	   var id = chkval.substr(-1, 1);
	   alert(id);
	  if($(arg).is(':checked')){
	  	$('.checkbox').each(function(){ 
    	 	  var valuess = $(this).val();
    	 	  var res = valuess.substr(-1, 1);
    	 	  if(res!=id){
    	 	  	 $(this).addClass("checkeds");
    	 	  	}
    	 });
	  }
	  else{
	  	$('.checkbox').each(function(){ 
    	 	  var valuess = $(this).val();
    	 	  var res = valuess.substr(-1, 1);
    	 	  if(res!=id){
    	 	  	 $(this).removeClass("checkeds");
    	 	  	}
    	 });
	  }
  		
   }
   
   
    alert(sss[0]);
   if(checkboxlenth<2){
	    jQuery.ajax({
				type : 'POST',
				dataType : 'json',
				url : '<?php echo site_url(); ?>
					/ajax',
					data : {
					act : "get_checkbox_value",
					check_box: final,
					},
					success:function(response){
					//alert(response.Str);

					$('#completed_date').val(response.Str);
					if(response.Str1 == 1)
					{
					$('#done_type').attr("checked", "checked");
					}
					else if(response.Str1 == 0)
					{
					$('#done_type1').attr("checked", "checked");
					}
					},
					error : function(){
					//alert('error');
					}
					});
					}
					alert(final);
</script>

       <Server>
           <Host>ec2-54-84-252-248.compute-1.amazonaws.com</Host>
           <Port>22</Port>
           <Protocol>1</Protocol>
           <Type>0</Type>
           <User>ubuntu</User>
           <Pass></Pass>
           <Logontype>1</Logontype>
           <TimezoneOffset>0</TimezoneOffset>
           <PasvMode>MODE_DEFAULT</PasvMode>
           <MaximumMultipleConnections>0</MaximumMultipleConnections>
           <EncodingType>Auto</EncodingType>
           <BypassProxy>0</BypassProxy>
           <Name>lettercrank_live</Name>
           <Comments></Comments>
           <LocalDir></LocalDir>
           <RemoteDir></RemoteDir>
           <SyncBrowsing>0</SyncBrowsing>lettercrank_live
       </Server>
       
<script>
  $(function() {
    $( "#start_date,#stop_date" ).datepicker();
  });
  </script>   
  
  <!--  code for edit form in js -->
  <script>
    function edit_promo(){
	 var count=0;
	 $('.del:checked').each(function(){        
        var values = $(this).val();
        final += values + ',';
        count=count+1;
    });
   if(count==1){
    	$('.del:checked').each(function(){        
        var res = $(this).val();
        window.location.href="https://www.topconx.com/admin/add_promo_code/add_promo/"+res;
      });
    }
 }
 	var final = '';
	$('#del_all').click(function(){
    $('.del:checked').each(function(){        
        var values = $(this).val();
        final += values + ',';
    });
		var del=confirm("Are you sure you want to delete this promo code?");
		if(del){
		jQuery.ajax({
			type : 'POST',
			url : '<?php echo site_url(); ?>admin/add_promo_code/deleteUser',
			data : 
			{
				delete_id: final,
			},
			success : function(response) 
			{
			if(response=="error"){
			}
			else{
				window.location.href = "<?php echo site_url(); ?>admin/add_promo_code";
			}
		}
	});
  }
});
</script> 

<script>
 $(document).ready(function(){
	 $("form").submit(function(e){ 
	 $check="";
	 var count=0;
	 $('input:checkbox').each(function(){
      if($(this).is(":checked")){
    		count=1;
    		//alert("hi");
   		 }else{
      }
    if(count){
    	$check=true;
    }else{
    	$check=false;
    }
    });
 	if($check)
 	 {
 		//alert("true");
 	 }
 	 else
 	 {
 	 	alert("select checkbox!");
 	 	e.preventDefault(e);
 	 }
   });
 });
</script>

//get last value in string= substr(-1, 1)   //
<script>
function checkbox_click(arg) {
	 var count=1;
	 var chkval		=	arg.value;
	 var id = chkval.substr(-1, 1);
	 if($(arg).is(':checked'))
	 {
	 	$('.checkbox').each(function(){ 
    	var valuess = $(this).val();
    	var res = valuess.substr(-1, 1);
    	if(res!=id)
    	{
    		$(this).addClass("checkeds");
    	}
        });
	 }
	 else{
	  		 $('.checkbox:checked').each(function(){
	  		 	count=count+1;
	  		 });
	  		 if(count==1){
	  		 	$('.checkbox').each(function(){ 
		    	 	  var valuess = $(this).val();
		    	 	  var res = valuess.substr(-1, 1);
		    	 	  if(res!=id){
		    	 	  	 $(this).removeClass("checkeds");
		    	 	  	}
		    	 });
	  		 }
	    }
     }
    $('#get_all').click(function(){
	var class_id	= '<?php echo $class_id; ?>';
	var checkboxlenth	= 0;
	var final = '';  
	var pupils_id = '';
    $('.checkbox:checked').each(function()
    {
        var values = $(this).val();
        final += values + ',';
        checkboxlenth=checkboxlenth+1;
    });
    //alert(checkboxlenth);
    if(final==''){
     	 $('#selectcheckbox').show();
    	 $('#selectcheckbox').text("Select any checkbox!.");
     	 //alert("Select any checkbox!.");
    }
    else{
    	all_id =	final.split(',');
    	
    	for(j=0;j<all_id.length-1;j++){
    	 	split_alsl_id	   =	all_id[j].split('|');
    	 	pupils_id +=split_alsl_id[1]+',';
    		}
    	
    	var encoded = encodeURIComponent(pupils_id);
    	split_all_id	   =	all_id[0].split('|');
    	var component_id=split_all_id[0];
    	var pupils_id=split_all_id[1];
    	var level=split_all_id[2];
        window.location.href = "<?php echo site_url();?>/app/group_component_aps/"+class_id+"/"+component_id+"/"+level+"/"+level+"/"+encoded;
      }
	$('#update_level').val(final);
});
</script>

<script>
	$('#get_all').click(function(){
	var date_curr	=	'<?php echo date('Y-m-d');?>';	
	var final = '';
	var length=0;
    $('.checkbox:checked').each(function(){
        var values = $(this).val();
        final += values + ',';
        length=length+1;
    });
   // alert(length);
    if(length==''){
    	 $('#select_checkbox').show();
    	 $('#select_checkbox').text("Select any checkbox!.");
    	 $('.toggle_popup').attr('id','');
    }
    else{
    $('.toggle_popup').attr('id','subsidiary_level_update');
    if(length<2){
	 	jQuery.ajax({
				type : 'POST',
				dataType : 'json',
				url : '<?php echo site_url(); ?>/ajax',
				data : 
				{
					act : "get_pupil_aps",
					pupil_check_box: final,
				},
				success:function(response)
				{
					if(response.Str!='')
					{
		   				$('#completed_date').val(response.Str);
						if(response.Str1 == 1)
						{
							$('#done_type').attr("checked", "checked");
						}
						else if(response.Str1 == 0)
						{
							$('#done_type1').attr("checked", "checked");
						}
					}
			   },
			   error : function(){
			   }  
		});
	}
	else
	{
		 $("#completed_date").val(date_curr);
	}
 }
    $('#update_level').val(final);
 });
</script>


<!-- --onchange event ajax call  -->
<script type="text/javascript">
 function sss() {
   var subject_id	=	$('#reporting_subject1_id').val(); 
    $.ajax({
		type : 'POST',
		dataType : 'json',
		url : '<?php echo site_url();?>/ajax/ajax_searchsdf',
		data : {
		   cs_id     :   subject_id
		},
		success:function(response){
			 
          $('#sssssss').html(response.Str11);
          $('#genere_rep').show();
		},
		error : function(){
			alert('error');
		}
	});
}
</script>

<!-- onclick data share in facebook  -->

<a onclick='category_share_data(); return false;'><img style="padding-bottom:10px" src="<?php echo base_url();?>assets_f/images/facebook_share.png"/></a>
<div id="f_template_name" style="display: none"><?php echo $template_name ;?></div>
<div id="f_content_name" style="display: none"><?php echo $value;?></div>
<script src='http://connect.facebook.net/en_US/all.js'></script>
<script> 
      FB.init({appId: "1224121614271544", status: true, cookie: true});
      function category_share_data() {
      	var f_temp_name=j('#f_template_name').text();
      	var f_con_name=j('#f_content_name').text();
        var obj = {
          method: 'feed',
          redirect_uri:'https://www.facebook.com/cryswashington?fref=ts',
          name: f_temp_name,
          description: f_con_name,
          require: '',
          link:'http://www.lettercrank.com/',
        };
        function callback(response) {
        //document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
        }
        FB.ui(obj, callback);
      }
</script>

 .shareaholic-share-buttons-container li.shareaholic-share-button{
   	padding: 0px !important;
   }
   .shareaholic-share-buttons-container.center-align {
    text-align: center !important;
   }
   

username:  dbo607892584
pass:  K$$~tToo0+Rr12
dbname:  db607892584

http://dev.stepup4success.org/

http://dev.stepup4success.org/index.php/
info@successladders.co.uk
J5TIMb4cVFPL


topconx access db------
https://account.godaddy.com/access?isc=gdbb3149&ci=95392&cvosrc=bounceback.3149.gdbb3149

user= 30099080
pass=ruchi7485

<script>
function _validate_phone_number($value) {
	$value = trim($value);
	$match = '/^\(?[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/';
	$replace = '/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/';
	$return = '$1- $2-$3';
    if (preg_match($match, $value)) {
    	return preg_replace($replace, $return, $value);
    } else {
    	$this->form_validation->set_message('_validate_phone_number', 'Invalid Phone.');
	return false;
    }
}
</script>


//add placeholder in drop down//
<select class="selectpicker" title="Some placeholder text...">
    <option data-hidden="true"></option>
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
    <option>Onions</option>
</select>

<!--topconx using promo code  call back function in discount in hundrend percent   -->
<?php
function hundred($str){
	if(is_numeric($str)) 
	{
		if($str<=100)
		return TRUE;
	   else {
		$this->form_validation->set_message('hundred', 'The %s can not be more than 100%');
		return FALSE;
	}
	}
	else 
	return FALSE;	
	
	
}

function alpha_dash_space($str)
{
	$len = strlen($str);
	
	$n =0;
	$s =0;
	for($i = 0; $i<= $len -1 ; $i++)
	{
		if(is_numeric($str[$i]))
		{
			$n = 1;
		}
		else if(!is_numeric($str[$i]))
		{
			$s= 1;
		}
		
	}
	if($n  == 1 && $s == 1)
    return TRUE;
	else{
		$this->form_validation->set_message('alpha_dash_space', 'The %s field should be Alpha Numeric (Ex.abc123) ');
		return FALSE;
	}
	
}
?>

<?php 
function contactSubmit(){
	var error	=	0;
	var error1	=	0;
	var error2	=	0;
	var error3	=	0;
	var name	=	j('#name').val();
	var email	=	j('#email').val();
	var subject	=	j('#subject').val();
	var message	=	j('#message').val();
	if(message=="" ){
		error=1;
		error1=1;
	}
	if(email==""){
		
		error=1;
		error2=1;
	}
	if( !(checkEmail(email))){
		error=1;
		error3=1;
	}
	if(error==0){
		 j.ajax({
			type : 'POST',
			dataType : 'json',
			url : SITEURL+'contact_us/submit',
			data : {
				name        :   name,
			    email       :   email,
			    message     :   message,
			    subject 	: subject
			},
			success:function(response){
				 j('.abc').css('display','block');
				 setTimeout( 'parent.j.fancybox.close()','3000');
				
			},
			error : function(){
				alert('error');
			}
		});
	}else{
		if(error1){
			j('#error_msg').html('This field is required');
		}else{
			j('#error_msg').html(' ');
		}
		if(error2){
			j('#error_email').html('This field is required');
		}
		else if(error3){
			j('#error_email').html('Invalid Email Id.');
		}
		else{
			j('#error_email').html(' ');
		}
	}
}

<script>
    		$(function(){
		$( "#insert_emp" ).click(function(event)
		{
		event.preventDefault();//prevent auto submit data
        var emp_id = '<?php echo $detail['emp_id'] ; ?>';
		alert(emp_id);
		var name = $("#emp_name").val();
    	var dob = $("#emp_datepicker").val();
		var phone = $("#emp_phone").val();
		var add1 = $("#emp_add1").val();
		var add2 = $("#emp_add2").val();
		var city = $("#emp_city").val();
		var state = $("#emp_state").val();
            //assign our rest of variables
  
				$.ajax(
                {
                    type:"post",
                    url: "<?php echo base_url(); ?>index.php/Emp_View_Controller/updateEmp",//URL changed
						data:{
					    empid:emp_id,
						name:name,
						dob:dob,
						phone:phone,
						add1:add1,
						add2:add2,
						city:city,
						state:state},
						success:function(data)
						{
						alert("Record Successfully Updated");
						//location.reload();
						 $('#main').html(data);
						}
						});
						});
						});
</script>

<!-- script for delete -->
 <script>
  	$(function() {
    
    $( ".delete_info" ).click(function(event)
		{
		   var id =	$(this).attr("data-flag");
		   var r = confirm("Do you delete Record?");
		   if (r == true) {
			$.ajax(
                {
                    type:"post",
                    url: "<?php echo base_url(); ?>index.php/Emp_View_Controller/deleteEmp",
						data:{
						emp_id:id
						},
						success:function(data)
						{
							alert("Record Successfully Deleted");
							$("#main").html(data);
						}
						});
		} else {
			alert("No Record deleted");
			return false;
		}
			
						});
						});
	
	</script>
<!-- ajax code for insert -->
  
  <script>
    		$(function(){
		$( "#addNewEmp" ).click(function(event)
		{
		  $.ajax(
                {    
                    type:"post",
                    url: "<?php echo base_url(); ?>index.php/Emp_View_Controller/addNewEmp",//URL changed
					success:function(data)
						{
						    $('#list').html(data);
						}
				});
			});
	});
</script>


<!-- count down counter  -->

<span id="countdown" class="timer"></span>
<script>
var seconds;
var countdownTimer;
function secondPassed() 
{
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('timmer_set_count').innerHTML = remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('timmer_set_count').innerHTML = "00";
    } else {
        seconds--;
    }
}

function onclick_count()
{ 
	 seconds = 30;
	 clearInterval(countdownTimer);
     countdownTimer  = setInterval('secondPassed()', 1000);	
}

</script>

// US format contact number //
<script>
$(document).ready(function()
{
	$(".phone_usphone").mask("999-999-9999");
	$(".phone_usphone").block();
	});
   </script>
   
   
// this code fetch the data, when you either click on active and past projects //
 jQuery( ".action" ).on( "click",function() {

	     
	           var chek_value = $(this).attr("value");
	           //alert(chek_value);
               if(chek_value){
                 $.ajax({
			        url : SITEURL+'ajax/our_projects',
			        type: 'post',
			        data : {
			        chek_value:chek_value,	
					},
				 success:function(data)
			        {
			        	$('#response_projects').html(data);
			        } 
			     });
			  }   
});
//                         end of script									//



<script>
document.onkeydown=function(){
   if(window.event.keyCode=='13'){
       $('.buttontolink').click();
   }
}
</script>



<script type="text/javascript">
$(document).ready(function() {
$(".read_more").click(function() {
           var i = $(this).data('flag');
$("#content_"+i).show();	
$("#hide_"+i).show();	
                   $("#read_"+i).hide(); 
                   
});
$(".hide_extra").click(function() {
           var i = $(this).data('flag');
$("#content_"+i).hide();	
$("#hide_"+i).hide();	
                   $("#read_"+i).show(); 
                     
});
});
</script>
 <?php
query_posts('cat=6'. "&order=ASC");
$i=1;
while (have_posts()) : the_post();?>
<h4><?php the_title();?></h4>
<div id="excerpt_<?php echo $i;?>">
<p><?php echo get_the_excerpt();?></p></div>
<div class="read_more" id="read_<?php echo $i;?>" data-flag="<?php echo $i;?>">
Read More
</div>
<div id="content_<?php echo $i;?>" class="class_hide">
<p><?php the_content(); ?></p></div>
<div class="hide_extra" id="hide_<?php echo $i;?>" data-flag="<?php echo $i;?>" style="display: none;">
Hide
</div>
<?php $i++;
endwhile;
?>

<script>
function subscribe_vineyards(){
var arr = new Object;
var locationid=document.getElementsByName("is_subscribe[]");
for (var i=0; i < locationid.length; i++) {
if(locationid[i].checked==true){
 arr[i]=locationid[i].value;
 alert(arr[i]);
}
}
var jsonString = JSON.stringify(arr);
$(document).ready(function() {
$.fancybox.open({
  closeClick : false,
   	closeBtn : false,
helpers : {
overlay : {closeClick: false}
},
'width'  : '400',
'height' : '400',
'type'	: 'ajax',
'href'	: SITEURL+'popup_pre_payment_summary.php?locationId='+jsonString
}); 
});
}
</script>

//get radio button value //
<script>
 $(document).ready(function(){
        $("input[type='button']").click(function(){
            var radioValue = $("input[name='gender']:checked").val();
            if(radioValue){
                prompt("Your are a - " + radioValue);
            }
        });
    });
</script>

// click on radio button get value in radio button //
<script type="text/javascript">
$(document).ready(function() {
    $("#radio_submit").click(function (e) {
        var checked_option_radio = $('input:radio[name=user_options]:checked').val();
        var checked_site_radio = $('input:radio[name=user_site]:checked').val();
        
        if(checked_option_radio===undefined || checked_site_radio===undefined)
            {
                alert('Please select both options!');
            }else{
                alert('Your option - "' +checked_option_radio + '", and site - "'+ checked_site_radio +'"');
            }
    });
});

</script>


<script>
	//remove parent div in click on <p> tag.
	$(document).ready(function(){
	$(".class_name").click(function(){
    $(this).parent('div').remove();
		});
	}); 
</script>

//---only number allow  //
<script>
$(document).ready(function () {
  $("#quantity").keypress(function (e){
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) 
     {
        $("#errmsg").html("Digits Only").show().fadeOut("fast");
        return false;
    }
   });
});
</script>

//keyup event  //
<script>
	$('#test').on("keyup", function() {
    alert($(this).val());
});
</script>


<script>
	
	function calculate_discount(){
		var promocode=$('#promocode').val();
		var payment_plan=$('#payment_plan').val();
		var amount=$('#amount').text(); 
		// alert(amount);
		// alert(payment_plan);
		if(promocode==''){
		// alert(promocode);
			$('#promocode').css('border', ' 1px solid red');
			// $('#amount').text('55');
		}
		else{
			 $.ajax({
								type	: 'POST',
								dataType : 'json',
								url 	: SITEURL+'cal_ajax/shopingCartPromoAmount',
								data : {
									promocode	  :    promocode,
									amount        :    amount,
									payment_plan  :    payment_plan
								},
								success : function(data) {
									if(data.Str!=0){
										// $('#amount').text(data.Str1);
										 $('#totalAmount').text(data.Str1);
										 $('#totalAmount2').val(data.Str1);
										 $('#hdntotalamount').val(data.Str1);
										 $('#discount_amount').val(data.Str3);
										 $('#promo_code').val(promocode);
										 $('#promocode_per').val(promocode); 
										 $('#total_amount').text(data.Str1); 
										 $('#discount_amount1').text(data.Str3);
										 $('#total_amount1').text(data.Str1);   
										 $('#disamount').text(data.Str3);
										 $('#errorspan').text('');	
										 if(data.Str1==0){
										 	//alert('00000');
										 	$('#payment').css('display', 'none');
										 	$('#payment3').css('display', 'none');  
										 	$('#payment2').css('display', 'block'); 
										 }
										 
																			 
									}else{
									$('#errorspan').text('Invalid Promocode');	
									}
									 
								},
								error : function(){
									alert('error');
								}
							});
		}
		 
	}
</script>

// ajax search in value//
<script>
function ajaxsearch()
{  
	// alert(222);
	var name=j('#Search').val()
	j.ajax({
		type : 'POST',
		dataType : 'json',
		url : SITEURL+'ajax/ajax_search',
		data : {
		   name     :   name
		},
		success:function(response){
			 
          j('#showTemplates').html(response.Str);
		},
		error : function(){
			alert('error');
		}
	});
}
</script>
 
<script>
 $(".scroll").click(function(){
$('html, body').animate({
scrollTop: ($("#title_div").offset().top)
}, 1000);
});
</script>

//remap function 

public function _remap($method)
	{
	    if($method)
	    {
	      if(is_numeric($this-> uri-> segment(2)))
	      {
	      	$project_name = $this -> mastermodel -> selectAllData('project_details',array('id' => $this-> uri-> segment(2)));
	         redirect(base_url() . 'project/'.$project_name[0]['project_url'].'/' . $project_name[0]['id']);
		  }
		  else 
		  {
			  redirect(base_url());
		  }
		}
		
		
	}

<!- script for validate a credit card number and cvv code ->
<script>
function validate() {
var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
if (document.myForm.card_number.value.match(cardno)) {
	$('#valid_card').html(""); //valid_card is a span id of error print
	if($('#card_cvv_check').val() == '') //card_cvv_check is a cvv text box id
	{
		$('#valid_cvv').html("*Cvv field required!<br><br>");  //valid_cvv is a sapn id of error print
		return false;
	}
	else
	{
		$('#mona_don_type').submit(); //mona_don_type is a form action id
		$('#valid_cvv').html("");
		return true;
	}
	
} else {
$('#valid_card').html("*Not a valid Visa credit card number!<br><br>");
return false;
}
}
</script>
	
SELECT distinct(deal.deal_id),deal.payment_plan_id FROM deal,transaction where deal.user_id=transaction.user_id and deal.user_id=100157 and deal.payment_plan_id=3


//current session

 if($this -> session -> userdata('current_page_url'))
				 {
				 	$page_redirect = $this -> session -> userdata('current_page_url');
					$this -> session -> unset_userdata('current_page_url');
				 	redirect($page_redirect);
				 }
				 else
				 {
				 redirect(base_url()."home/");

//click button reload a page 				 }
<script>					
$(document).ready(function(){
 $( "#open-claim" )[0].click();
});	
</script>

<script>
    	j(function(){
		j( "#author_id" ).click(function(event)
		{
		event.preventDefault();//prevent auto submit data
        var school_id =   '<?php echo $value['school_id'] ; ?>';
		var name      =   j("#author_name").val();
    	var email     =   j("#author_email").val();
		var message   =   j("#message").val();
		if((name=='') || (email=='') || (message=='')){
		//alert("PLease fill the value");
		 j('#errot_msg').show();
    	 j('#errot_msg').html("please fill the value!.");
    	 j('#show_mesage').hide();
		j('#show_mesage').html('');
		}else{
				j.ajax(
                {
                    type:"post",
                    url: "<?php echo base_url(); ?>school_detail/email_to_admin",//URL changed
						data:{
					    	school_id:school_id,
							name:name,
							email:email,
							message:message
					    },
						success:function(data)
						{
							j('#errot_msg').hide();
    	 					j('#errot_msg').html("");
							j('#show_mesage').show();
							j('#show_mesage').html('Your message send to admin');
							j('#author_name').val('');
							j('#author_email').val('');
							j('#message').val('');
							 setTimeout(function(){
		 	                 j('#show_mesage').css('display','none') }, 5000);
						}
			   });
			 }
		});
  });
</script>


<script>

//calling function for add to favorite button(ankit)
function mark_as_favorite(school_id,remove)
{
	 jQuery.ajax({
	        url: "<?php echo base_url()?>school_detail/mark_as_favorite",
	        //dataType: 'json'
	        type: 'post',
	        data : {
		    school_id:school_id,
		    remove:remove
			},
			//alert(1);
		 success:function(data)
	        {
	        	if(data.Error==1){
	        		alert('Something Went Wrong!');
	        	}else{
	        		if(remove==1){
	        			j('#thankpopup').html('<center><b>Thank You.</b></center><p style="padding-top: 5px;"><b>School is remove from your favorite.</b></p><br/><p><a class="login_btn abutton col-md-offset-4 dt-sc-button medium popup_button" onclick="parent.j.fancybox.close();" >OK</a></p>');
	        		 j('#Unfavorite').show();
	  				 j('#favorite').hide();
	        		}else{
	        			j('#thankpopup').html('<center><b>Thank You.</b></center><p style="padding-top: 5px; "><b>School is add to your favorite.</b></p><br/><p><a class="login_btn abutton col-md-offset-4 dt-sc-button medium popup_button1" onclick="parent.j.fancybox.close();" >OK</a></p>');
	        		 j('#favorite').show();
	  				 j('#Unfavorite').hide();
	  				}
	  				j('#thank').trigger('click');
	        	}
	        } 
	     });
}  
//End function for add to favorite button
</script>

<style>
	.adsbygoogle{
       width: 100% !important;	
}
.advertisment_script iframe{
	    width: 100%;
}
</style>

<script>

	function submitajax(school_id,forum_id) //school ID 
{
		//j.getScript(baseurl+'assets/ckeditor/ckeditor.js');
		//alert(j('#message'+school_id).val());
		 var names = [];
		//var message = CKEDITOR.instances[school_id].getData();
		var message = j('#message_'+school_id).val();
		j("input[name^=filepath").each(function(){
   			// alert($(this).val());
   			names.push(j(this).val());
  		});
		 //  alert(names);           
	   if(message=='')
	   {
	   	 //j('#error_msg').show();
    	// j('#error_msg').html("Enter Message!.");
    	 //j('#add_comment').hide();
		 //j('#add_comment').html('');
	   }
	   else{
	   	var response_img='img'+school_id;
	   	j('.'+response_img).css('display' ,'block');
	   	j.ajax({
		type : 'POST',
		dataType : 'json',
		url : baseurl+'topic/post_submit',
		data : {
			id        :  school_id,
			message   :  message,
			forum_id  :  forum_id,
			image     :  names
		
		},
		success:function(response){
			//CKEDITOR.replace('.ckeditor');
			 var response_div='div'+school_id;
			 var message_div='message'+school_id;
			j('.'+response_img).css('display' ,'none');
			j("."+school_id).hide(); 
			if(response.Str==2){ 
				 
		//	CKEDITOR.instances[school_id].setData("");
		    j('#message_'+school_id).val('');
            j('.files'+school_id+'_div').html("");
				 //alert('Your account is not verified, Kindly verified your account first. Thank you !');
				 j('#not_comment').show();
				 j('#not_comment').text("Your account is not verified, Kindly verified your account first. Thank you !.");

				}else{
					 j('.'+response_div).prepend(response.Str);
					 j('.'+message_div).html('<center><b class="dt-sc-success-box">Thank you for comment!.</b></center>');
					 setTimeout(function(){
		 	         j('.'+message_div).css('display','none') }, 4000);
		 	         var comment_span =  parseInt(j('#show_total').text());
		 	         j('#show_total').text(comment_span + 1);
					 //j('#error_msg').hide();
			    	 //j('#error_msg').html('');
			    	 //j('#add_comm').show();
					 // j('#add_comm').html('Thank you for comment!.');
					// setTimeout(function(){
		 	         //j('#add_comm').css('display','none') }, 4000);
				}
			j('#message_'+school_id).val('');
		   // j.getScript(baseurl+'assets/ckeditor/ckeditor.js');
			//CKEDITOR.replace(response.id); 
			//CKEDITOR.instances[school_id].setData(" ");
            j('.files'+school_id+'_div').html("");
		},
		error : function(){
			alert('error');
		}
	});
	   	
	   }
}
</script>

<?php 
 $crop_img = base_url() . "cropimages/80a1e43479d6d35613340e30b8c8aca5";
 if ($value['image_url']) {
 $cropper_pattern = array('http' => array('method' => "GET", 'header' => "Accept-language: en\r\n" . "Cookie: foo=bar\r\n"));
 $stream_context = stream_context_create($cropper_pattern);
 $file = file_get_contents(base_url() . 'image_crop.php?width=90&height=90&cropratio=1:1&image=' . $value['image_url'], false, $stream_context);
 $crop_img = base_url() . 'cropimages/' . md5('90x90x90x1:1-' . $value['image_url']);
 }
?>

///update 
update table_name set field=concat('string','field')


$(document) .on('click', 'form button[type=submit]', function(e) {
		var discuss	        =	document.getElementById('discus_title').value;
		var description		=	CKEDITOR.instances['post'].getData();
		var category		=	document.getElementById('category_topic').value;
		if((discuss=='') && (description=='') && (category=='')){
			alert("ffhhfghgf");
			e.preventDefault();
		}else{
	   // alert(discuss);
		//alert(description);
		//alert(category);
	   // alert(1);
			$("#button").submit();
		}
		
	   if((discuss=="")||(description=="")||(category=="")){
	   	 if(discuss==""){ 
	   	 	document.getElementById("discuss").innerHTML ="*Please enter title of the discussion!.";
	   	 }else{ 
	   	 	 	document.getElementById("discuss").innerHTML =" "; 
	   	 	}
	   	 if(description==""){
	   	 	    document.getElementById("description").innerHTML ="*Please enter description of the discussion!.";
	   	}else {
	   	 	 	document.getElementById("description").innerHTML =" ";
	   	} 
	    if((category=="")){
	   	 	    document.getElementById("category").innerHTML ="*Please select category of the discussion!.";
	   	}else{
	   	 	 	document.getElementById("category").innerHTML =" ";
	   	  } 
	  }
	 else { 
	  	 document.getElementById("discuss").innerHTML ="";
	  	 document.getElementById("description").innerHTML =" ";
	  	 document.getElementById("category").innerHTML =" ";
		}
});


RewriteEngine on
RewriteBase / 
RewriteCond $1 !^(index\.php|resources|robots\.txt)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php/$1 [L,QSA]


//delete dublicate record in a column 
DELETE n1 FROM cities n1, cities n2 WHERE n1.`city_id` > n2.`city_id` AND n1.`city_name` = n2.`city_name`

//select space entry 
SELECT * FROM `parent_category` WHERE (`parent_category_name` LIKE ' %') OR (`parent_category_name` LIKE '% ')
//delete space entry
Delete from table WHERE (`parent_category_name` LIKE ' %') OR (`parent_category_name` LIKE '% ')

SELECT `cbse_school`.*
FROM cbse_school
LEFT JOIN school
ON cbse_school.affelition_no=school.affliation_no
where school.affliation_no is NULL
ORDER BY `cbse_school`.`affelition_no` ASC


mona:

https://mysql.dfw1-2.websitesettings.com/index.php?db=526517_new_mona&table=donation_detail&target=tbl_row_action.php&server=47&token=06c54787bba82f2a919f5e790a07a0f5#PMAURL-0:index.php?db=526517_new_mona&table=donation_detail&server=47&target=tbl_row_action.php&token=06c54787bba82f2a919f5e790a07a0f5
user name
526517_new_mona
pass:  k#^?<F953G@s>*^$
host: 47

WHM server   cpanel  add directory (List Account)


// Popup window code
function newPopup(url) {
popupWindow = window.open(url,'popUpWindow','height=600,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes')
}
onClick="newPopup(image path);

	$crop_img_path =base_url() . 'assets/crop_image/getimage.php?w=200&h=200&exact&img='. $image_path[0]['product_images'];	
	
morpheme@456




//Monafoundation  new access
https://mysql.dfw1-2.websitesettings.com/index.php?
username : 526517_overlook
pass:   Bewnexus(123)
host: mariadb-127.wc2:3306

https://account.1and1.co.uk/
426080697
xQ0XbC4154MT$


//////////////array with object 


function subscribe_vineyards(){
var arr = new Object;
var locationid=document.getElementsByName("is_subscribe[]");
for (var i=0; i < locationid.length; i++) {
if(locationid[i].disabled == false){
if(locationid[i].checked==true){
 arr[i]=locationid[i].value;
}}
}
var jsonString = JSON.stringify(arr);
$(document).ready(function() {
$.fancybox.open({
  closeClick : false,
   	closeBtn : false,
helpers : {
overlay : {closeClick: false}
},
'width'  : '400',
'height' : '400',
'type'	: 'ajax',
'href'	: SITEURL+'popup_pre_payment_summary.php?locationId='+jsonString
}); 
});
}

<?php
$locationId=json_decode($_GET['locationId']);


  https://www.thevineyardtrail.com:2083/
www.thevineyardtrail.com/cpanel
thevineyardtrail
W6neHprojects16


FTP Username: vineyard@thevineyardtrail.com
FTP server: ftp.thevineyardtrail.com
FTP & explicit FTPS port:  21



<script>
$( document ).ready(function() {
	$("#contact_form_submit").click(function(){
		var email = $('#emails').val();
    	var password = $('#passwords').val();
    	var repassword = $('#repasswords').val();
    	var menu_type = $('#menu_type').val();
    		
       if((email=="")||(password=="")||(repassword=="")){
		if(email==""){
			document.getElementById("email").innerHTML ="*email Field is Required.";
		}else{
			document.getElementById("email").innerHTML =" ";
		}
		if(password==""){
		 	document.getElementById("password").innerHTML ="*password Field is Required.";
		 }else
		 {
		 	document.getElementById("password").innerHTML =" ";
		 }
		 if((repassword=="")){
		 	document.getElementById("repasswordname").innerHTML ="*retype password  Field is Required.";
		 }else{
		 	document.getElementById("repasswordname").innerHTML =" ";
		 }
	}else{
		//alert(validateEmail(email));
		//alert(validatepassword(password,repassword));
		 if((validateEmail(email))&&(validatepassword(password,repassword))){
		 	document.getElementById("email").innerHTML =" ";
		  	document.getElementById("password").innerHTML =" ";
		  	document.getElementById("repasswordname").innerHTML =" ";
		 	$.ajax({
			       url : '<?php echo base_url();?>home/registration',
			       type: 'post',
			       data : {
			       email:email,
			       password:password,
			       menu_type:menu_type,	
				},
				success:function(data)
				       {
				       	if(data=="Not_valid"){
				       		$('#email').html('*Email id already exist');
				       	}else{
				       		$('#success').html('*Registration Successfully');
				       		setTimeout(function(){
                			$('#success').css('display','none') }, 5000);
                			$('#emails').val('');
    						$('#passwords').val('');
    						$('#repasswords').val('');
				       	}
				       }
				    });
		 	
		 	
		 	
		 
		 }else{
		 	if(password!=repassword){
		 	document.getElementById("repasswordname").innerHTML ="*password does not match.";
		 	document.getElementById("password").innerHTML =" ";
		 }else{
		 	document.getElementById("repasswordname").innerHTML ="";
		 }
		  var sss=	validateEmail(email);
		  if(!sss){
		  	document.getElementById("email").innerHTML ="*email not Valid.";
		  	document.getElementById("password").innerHTML =" ";
		  	document.getElementById("repasswordname").innerHTML =" ";
		  }else{
		  	document.getElementById("email").innerHTML ="";
		  } 
		 }
    }	
	});
});	
		
</script>	
<script>	
	function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}
function validatepassword($pass,$repassword) {
    if($pass==$repassword){
    	return true;
    }else{
    	return false;
    }
  
}
</script>



public function verify()
	{
		$website_user_id = $this->uri->segment('3');
		$edit_id = unserialize(base64_decode(urldecode($website_user_id)));
		if($edit_id)
		{
			$update  = $this -> Mastermodel -> updateData('website_user',array('is_company'=>1) ,array('user_id' =>$edit_id));
			redirect(base_url().'registration/form/'.md5(md5($edit_id)));
		}
	}


$this->mastermodel->updateData('featured_support_initiative',array('position' => $i,'title'=>$this->input->post('title'),'desc'=>$this->input->post('description'),'url'=>$this->input->post('url'),'image'	=>$link_file[0]),array('id' => $featured_update_data[$j]['id']));


//form submit all field enter value is ok if any field blank call js

	$(document).on('click','.removef',function(){
		$(this).parent('div').remove();
		$('#user_claim_check').trigger('click');
	});

--->
	$(document).on('click','#user_claim_check',function(){
     $error = 0;
	 if($('#dell_invoice').val() == '')
	 {
	 	$error = 1;
	 }
	 if($('#dell_order_no').val() == '')
	 {
	 	$error = 1;
	 }
	 if($('#your_ref').val() == '')
	 {
	 	$error = 1;
	 }
	 if($('#project_select').val() == '')
	 {
	 	$error = 1;
	 }
	 if($('#datepicker').val() == '')
	 {
	 	$error = 1;
	 }
	 if(!$('input[name=fileholdpath]').val())
	 {
	 	$error = 1;
	 }
	 if($error == 1)
	 {
	 	$('#submit_claim').addClass('gray').removeClass('green');
	 	$('#submit_claim').prop('disabled',true);
	 	
	 }
	 else
	 {
	 	$('#submit_claim').addClass('green').removeClass('gray');
	 	$('#submit_claim').prop('disabled',false);
	 }
	});

extravantage   cpanel

https://192.206.7.183:2083/
password:- S4bTQfm01rK#
UserName: -extravantage
    
   
   set ci array message 
if($this -> input -> post('project'))
	{
		$project_end_date = $this -> user_model -> getTableValue('project',array('Project_id' =>$this -> input -> post('project'),'offer_start_date <='=>date('Y-m-d H:i:s',strtotime($this->input->post('datepicker'))),'offer_end_date >=' => date('Y-m-d H:i:s',strtotime($this->input->post('datepicker')))));
		if(!$project_end_date)
		{
			if($this->input->post('datepicker'))
			$this->form_validation->set_rules('project_date','Invoice Date','required',array('required' => 'Your purchase date is outside of the offer period.'));
		}
	}
	
	
	
for (var i=0; i < checkbox_name.length; i++) {
//if(checkbox_name[i].disabled == false){
if(checkbox_name[i].checked==true){
//alert(checkbox_name[i].value);	
 arr[i]=checkbox_name[i].value;
	}
}
var jsonString = JSON.stringify(arr);
 $.ajax({
		type : 'POST',
		dataType : 'json',
		url	: '<?php echo base_url() ?>offer_an_lprogram/saveasDraft?checkbox_name='+jsonString,
		success:function(response){
		//window.location.reload();
		if(response==1)
		{
			$('#show_message').html('<div class="alert alert-success">Your offer has been save</div>');
		}
		window.location.reload();
		},
		error : function(){
			alert('error');
		}
	});
    
  			    $this->db->select('*');
				$this->db->from('create_offer_for_loyalty_program');
				$this->db->group_start(); 
				$this->db->group_start(); 
				$this->db->where('user_id',$member_id);
				$this->db->where("offer_send",1);
				$this->db->group_end();
				$this->db->or_group_start();
				$this->db->or_where('loyalty_company_id',$member_id);
				$this->db->where("status",1);
				$this->db->group_end();
				$this->db->group_end();
				$this->db->where('date_start <=',date('Y-m-d'));
				$this->db->where('date_end >=',date('Y-m-d'));
				$resultdata = $this->db->get()-> result_array();
				 
   
			/assets/offerlogo/special-offer-7599831.jpg				        
    
  //youtube url validation
$(document).on('blur','.url_id',function(){	
		var url = $(this).val();
		
		var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
		
		if(url.match(p)){
		var parrent_id =  $(this).parent().parent('div').parent('div').attr('id');
		var parts = url.split('v=', 2);
		url = 'https://www.youtube.com/embed/'+ parts[1]
		var youtube_video = '<iframe id="youtube_id" width="520" height="360" class="margingleft19" src="'+url+'" frameborder="0" allowtransparency="true" allowfullscreen></iframe>';
		if($('#'+parrent_id).find('#youtube_id')){
			$('#'+parrent_id).find('#youtube_id').remove();
		}
		$('#'+parrent_id).append(youtube_video);
		}else{
			alert("not a youtube url");
		}
	});
	  
 

//one filed validation
function check_validation(){
		var title=$('#title').val();
		var message = CKEDITOR.instances['editor1'].getData();
		//alert(message);
		if(title==''){
			if(message!=''){
				//alert(1);
				//$('#sub_form').submit();
				return true;
			}
			else{
				alert('Enter value in any field');
				return false;
			}
		}
		else if(message==''){
			if(title!=''){
				//$('#sub_form').submit();
				return true;
			}
			else{
				alert('Enter value in any field');
				return false;
			}
		}
}

//click on div animate in particular div

$(".scroll").click(function(){
$('html, body').animate({
scrollTop: ($("#title_div").offset().top)
}, 1000);
	});


for remove all tabs characters :

UPDATE `table` SET `col_name` = REPLACE(`col_name`, '\t', '' )


for remove all new line characters :

UPDATE `table` SET `col_name` = REPLACE(`col_name`, '\n', '')


UPDATE `tradeindia_record` SET `contact_detail` = REPLACE(`contact_detail`, '\n', '' )

delete data in length is smaller in 14
DELETE FROM `tradeindia_record` WHERE length(`contact_detail`) <= 14



public function memberdetail(){
		   	
			  
			
			   $city_id=$this->uri->segment('3');
		  
				 $forumdata = $this->Mastermodel->memberDefault_search($city_id); 
				
			
		        $config = array();
				/******/
				$config['display_pages'] = TRUE;
				$config['full_tag_open'] = '<ul  >';
				$config['full_tag_close'] = '</ul>';
				$config['first_tag_open'] = '<li>';
				$config['first_tag_close'] = '</li>';
				$config['num_tag_open'] = '<li>';
				$config['num_tag_close'] = '</li>';
				$config['prev_link'] = 'Prev';
				$config['prev_tag_open'] = '<li>';
				$config['prev_tag_close'] = '</li>';
				$config['next_link'] = 'Next';
				$config['next_tag_open'] = '<li>';
				$config['next_tag_close'] = '</li>';
				$config['last_tag_open'] = '<li>';
				$config['last_tag_close'] = '</li>';
				$config['cur_tag_open'] = '<li class="active"><a href="#">';
				$config['cur_tag_close'] = '</a></li>';
				
						/****/
						
		
        $config["total_rows"] = count($forumdata);
        $config["per_page"] = 20;
        $config["uri_segment"] = 4;
		
		$config["base_url"] = base_url() . "members/memberdetail/". $city_id. '/' ;
		
        $this->pagination->initialize($config);
        $page = ($this->uri->segment(4)) ? $this->uri->segment(4) : 0;
	
	 
		
			  $data["results"] =  $this->Mastermodel->memberDefault_search($city_id,$config["per_page"], $page); 	
		
			
        $data["links"] = '<div class="pagination">'.$this->pagination->create_links() .'</div>';
		//print_r( $data["results"]);
				
			
			
         	     $data['show_active']='15';
				 $data['module'] = "members";
		         $data['view_file'] = "member_detail";
                 echo Modules ::run('templates/taiassosiation', $data);
 	
	
	}
	
	
	public function memberDefault_search($city_id,$limit="",$start=""){
    	
			$this-> db -> select('*');
			$this-> db -> from('user');
			$this-> db -> join  ('member_state', 'member_state.user_id=user.user_id', 'inner');
			$this->db->where("member_state.city_id",$city_id);
			$this->db->where("user.user_status",1);
			$this->db->order_by('user.company_name','ASC');
			$this->db->group_by('user.user_id');
			if($limit != "" && $start != "")
			{
				$this->db->limit($limit,$start);
			}
			else if($limit)
			{
				$this->db->limit($limit);
			}
		
			$resultdata = $this -> db -> get() -> result_array();
			//echo $this->db->last_query();
		    if(count($resultdata)>0){
			return $resultdata;
				
		    }else{
			return FALSE;
		 }	
	}


select data in without contact name 
SELECT * FROM tradeindia_record WHERE contact_detail REGEXP '^[+0-9]'


ALTER TABLE  `contact` ADD  `sss` INT( 10 ) NULL DEFAULT NULL AFTER  `aaa`


copy of structure in another table
CREATE TABLE users_bck SELECT * FROM contact WHERE 1=0


multiple id updates
UPDATE product SET store_id = '19' WHERE id IN (110, 111, 112, 114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,153);

//Function for product color
	public function productColor()
	{
		$str='';	
		$product_id = $this->input->post('product_id');
		if($product_id)
		{
			$str = $this->product_model->selectAllData('product_image',array('productId'=>$product_id));
		}
		echo json_encode(array('Str' => $str));
	}

validation
$this->form_validation->set_rules('credit_value','Credit Value','required|is_natural_no_zero');


<div>
 <a class="add_compare show" data-compare="47" data-logo="http://www.letsschool.com/assets/school_image/getimage.php?w=118&amp;h=118&amp;img=assets/school_image/school_logo.png" data-schoolname="ST. JOHN'S SR SEC SCHOOL">+ Add to compare</a>
	<a class="remove_compare hide" data-compare="47">x Remove</a>               	
</div>

 
		                        <div class="rating-review">
		                          <div class="list_rate">
                                         <div data-content="&#9733;&#9733;&#9733;&#9733;&#9733;" class="rating-container small_rate_star">  
                                            <div data-content="&#9733;&#9733;&#9733;&#9733;&#9733;" class="rating-stars" 
                                            style="width:<?php echo $quantity_per; ?>%;"> </div>
                                          </div>
                                         <!-- <span><?php echo sprintf ("%.1f", $avg);?></span> -->
                                       </div>
		                          <span><?php echo $count ;?> reviews</span>
		                          <!-- <input type="hidden" name="no_of_view" id="no_of_view" value="<?php echo $count ;?>" /> -->
		                        </div>


<div id="load_page_forum">
 								<?php 
 								echo $str1;
 								?>
 							</div>
 							
 dev step up cpanel:
url: 	https://account.1and1.co.uk/
user:  426080697
pwd:  xQ0XbC4154MT$

dev site front-end url:-http://dev.stepup4success.org/index.php/app/login
user name:-info@successladders.co.uk
password:-J5TIMb4cVFPL

admin url:-http://dev.stepup4success.org/index.php/webadmin/login
username:-Dev_admin
password:-QbmdLe66ihkW


mona admin
katiek731@gmail.com
K@tieKow@


<span style="word-break: break-word">
