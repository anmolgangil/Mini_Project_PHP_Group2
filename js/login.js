$(document).ready(function () {
    $("#login").click(function () {
        //collect userName and password entered by users
        var userName = $("#email").val();
        console.log(userName);
        var password = $("#password").val();
        console.log(password);

        auth(userName, password);
    });
});

//authenticate function to make ajax call
function auth(userName, password) {
    $.ajax({
        
        //SEND TO MY SERVER URL
        url: "http://localhost:3000/user",
        method: "GET",


        data: '{"userName": "' + userName + '", "password" : "' + password + '"}',
        success: function (data) {
         $.each(data, function(key, value){ 

            console.log(value.userName);
            if (value.email == userName && value.password == password) {
                alert("welcome "+userName);
                $(location).attr('href', "../html/template_page.html")
                return true;
            }

            
        });
        },
        error: function () {
            alert("Something went wrong");
        }
    })
}

// $(document).ready(() => {

//     $("#submit").click(() => {
//         var name = $("#username").val();
//         console.log(name);
//         var password = $("#password").val();
//         console.log(password);

//         if (name == '' && password == '') {
//             alert("username or password is not entered.");
//         }
//         else {
//             $.ajax({
//                 // type:"GET",
//                 URL: "https://mocki.io/v1/bb987962-1cb8-4cf0-9774-daa4fa6a5949",
//                 method: "GET",
//                 sucess: function (result) {
//                     if (result.username == name && result.password == password) {
//                         alert("sucess");
//                         $(location).attr('href', "../html/home.html")
//                     }
//                 },
//                 error: (result) => {
//                     alert("Something went wrong");
//                 }
//             });

//         }
//     });
// })