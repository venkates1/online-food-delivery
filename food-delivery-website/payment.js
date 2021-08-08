function pay()
{
    if($("#caedno1").val()==''){alert("Enter the address");}
    else if($("#caedno2").val()==''){alert("Enter the total price");}
    else if($("#caedno3").val()==''){alert("Enter the card no");}
    else if($("#name").val()==''){alert("Enter the account holder's name");}
    else if($("#password").val()==''){alert("Enter the cvv no");}
    else if($("#mobile").val()==''){alert("Mobile no required");}

    else{
            alert("Your order has been placed succesfully!!!");
            window.location.href="index2.html";
        }
    
    
}


function clr()
{
    caedno1.value='';
    caedno2.value='';
    caedno3.value='';
    name.value='';
    password.value='';
    mobile.value='';
    
}

function cod()
{
    if($("#caedno1").val()==''){alert("Enter the address");}
    else if($("#mobile").val()==''){alert("Enter the mobile number");}
    else{
        alert("Your order has been placed successfully!!!");
        window.location.href="index2.html";
    }
}