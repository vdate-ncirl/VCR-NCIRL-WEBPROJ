/* Email Validation script obtained example cited in from w3schools.com   */
function ValidateEmail(inputText)  
    {  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(inputText.value.match(mailformat))  
    {  
    document.form1.text1.focus();
    alert('Thank You!!! '+  inputText.value +  ' has been added to our news group');
    return true;  
    }  
    else  
    {  
    alert("You have entered an invalid email address!");  
    document.form1.text1.focus();  
    return false;  
    }  
    }  
