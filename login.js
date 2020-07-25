function go(){
    var mail = document.myform.mail.value;
    var passcode = document.myform.passcode.value;
    if ( mail == "admin" && passcode == "admin123"){
window.open('quiz app.html')
    }
    else{
        alert("Invalid User Email Or Password")
    }
    document.myform.mail.value ="";
    document.myform.passcode.value="";
}