// to add new textarea to add work experience
function addNewWEField(){
    var newBox= document.createElement("textarea");
    newBox.classList.add("form-control");
    newBox.classList.add("weField");
    newBox.classList.add("mt-2");
    newBox.setAttribute("placeholder","enter here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newBox,weAddButtonOb);

}
// to add new textarea to add educational details
function addNewEQField(){
    var newBox= document.createElement("textarea");
    newBox.classList.add("form-control");
    newBox.classList.add("eqField");
    newBox.classList.add("mt-2");
    newBox.setAttribute("placeholder","enter here");

    let eqOb=document.getElementById("eq");
    let eqAddButtonOb=document.getElementById("eqAddButton");

    eqOb.insertBefore(newBox,eqAddButtonOb);

}

// to add new textarea to add certificate internship details
function addNewCTINField(){
    var newBox= document.createElement("textarea");
    newBox.classList.add("form-control");
    newBox.classList.add("ctinField");
    newBox.classList.add("mt-2");
    newBox.setAttribute("placeholder","enter here");

    let ctinOb=document.getElementById("ctin");
    let ctinAddButtonOb=document.getElementById("ctinAddButton");

    ctinOb.insertBefore(newBox,ctinAddButtonOb);

}

// to render the values onclicking the generate CV button
function generateCV(){
    //name
    let nameField=document.getElementById("name").value;
    let nameT=document.getElementById('nameT').innerHTML=nameField;

    //contact
    document.getElementById('contactT').innerHTML=document.getElementById("contact").value;

    //address
    document.getElementById('addressT').innerHTML=document.getElementById("address").value;

    //email
    document.getElementById('emailT').innerHTML=document.getElementById("email").value;

    //languages
    document.getElementById('languageT').innerHTML=document.getElementById("language").value;

    //hobbies
    document.getElementById('hobbiesT').innerHTML=document.getElementById("hobbies").value;

    //skills
    document.getElementById('skillsT').innerHTML=document.getElementById("skills").value;

    //objectives
    document.getElementById('objectiveT').innerHTML=document.getElementById("objective").value;

    //workExp
    let wexp=document.getElementsByClassName("weField");
    let str=''
    for(let e of wexp){
        str=str+`<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML=str;

    //education
     let edu=document.getElementsByClassName("eqField");
     let str1=''
     for(let x of edu){
         str1=str1+`<li> ${x.value} </li>`;
     }
     document.getElementById('eqT').innerHTML=str1;

    //certificate-internship
     let ctin=document.getElementsByClassName("ctinField");
     let str2=''
     for(let y of ctin){
         str2=str2+`<li> ${y.value} </li>`;
     }
     document.getElementById('ctinT').innerHTML=str2;


    //image upload
     var output=document.getElementById("avatar").files[0];
     console.log(output);

     let reader =new FileReader()
     reader.readAsDataURL(output);
     //console.log(reader.result);

     //set image to view at output
     reader.onloadend = function(){
        document.getElementById('imageT').src=reader.result;

     }
     
     //for hiding the form
     document.getElementById("cv-form").style.display='none';

     //for showing template
     document.getElementById("cvtemplate").style.display='block';
}

// to print CV
function printCV(){
    window.print();
}
