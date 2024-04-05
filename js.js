function formf(){

            

            



    let name=document.getElementById("name").value
     let email=document.getElementById("email").value
    let number=document.getElementById("number").value
    let message=document.getElementById("message").value




   




    



    document.getElementById("nameEr").innerHTML = "";
    document.getElementById("emailEr").innerHTML = "";
     document.getElementById("numberEr").innerHTML = "";
     document.getElementById("messageEr").innerHTML = "";





    if(name==""){
      name=document.getElementById("nameEr").innerHTML="name is required"

      return false
    }



    if (email==""){
      email=document.getElementById("emailEr").innerHTML="email is required"
      return false
    }

    else if(!isvalid(email)){

      email=document.getElementById("emailEr").innerHTML="invalid email"

       return false
    }








    if (number==""){
      number=document.getElementById("numberEr").innerHTML="number is required"

      return false
    }

    else if(number.length!==10){
       number=document.getElementById("numberEr").innerHTML="invalid number"
       return false
     }










     if(message==""){
       message=document.getElementById("messageEr").innerHTML="message is required"

       return false
     }

     else if(message.length>30){



       message=document.getElementById("messageEr").innerHTML=" invalid message"

       return false


    }

     
       




    alert("Thank you for contacting us!");

    setTimeout(function() {
      document.getElementById("contactForm").reset();
  }, 500); 

  
    return true
   }








     function isvalid(email){

      let regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email)
    


    

   }




  
   // for trainer     





   function zoomIn(element) {
  element.style.transform = "scale(1.1)";
element.style.transition = "transform 0.5s ease"; 
  }

 function zoomOut(element) {
element.style.transform = "scale(1)";
element.style.transition = "transform 0.5s ease"; 

 }
