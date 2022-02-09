$(document).ready(function () {
    $("#register").click(function () {
        var name = $("#uname1").val();
        var email = $("#email1").val();
        var password = $("#password1").val();

       // var uppercase = /[A-Z]/g;
        //var numbers = /[0-9]/g;
       
     // if (name.value.length ==0){
        // alert("field required");
      //} else if (email.val.length ==0){
      //alert("field required");
      // } else if (password.val.length ==0){
         //alert("field required");
   
//   }  else if (password.val.length > 8){
 //      alert("max of 8");
   // } else if (!password.val.match(numbers)){
     //   alert("please add 1 number");

     //}else if (!password.val.match(uppercase)){
      //alert("please add 1 uppercase letter");
   // }else {

     // alert("success.....")

   //}

        var formData = {
            
            "name": name,
            
            "email": email,
            
            "password": password
            
        }

        $.ajax({
            type: "POST",
            url: "http://localhost:3000/user",
            data: formData,
            dataType:"json",
            success: function (response) {
                alert("Registered Successfully...!!");
            }
        });
    });

});

    