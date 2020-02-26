$(document).ready(function(){
    
$(" #register,#pwdReset ").addClass(' displayNone ');
    
$(" #topwdReset  ").click( function(){
    
$(" #pwdReset ").removeClass(' displayNone ');

$(" #login ").addClass(' displayNone ');
          
});
    
   
$(" #toRegister  ").click( function(){
    
$(" #register ").removeClass(' displayNone ');

$(" #pwdReset ").addClass(' displayNone ');
    
$(" #login ").addClass(' displayNone ');    
          
});
    

$(" #tologin  ").click( function(){
    
$(" #login ").removeClass(' displayNone ');

$(" #register ").addClass(' displayNone ');
          
});

$(" #approved ").appendTo(' <div class='carousel-item active' id='apprOne'> ');
//$("</div>").insertAfter("#apprOne > .col:nth-child(2)");
//<div class="carousel-item active"> 
    
});