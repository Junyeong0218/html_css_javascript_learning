function enableButton(){
  const id = document.getElementById("user_id").value
  const pw = document.getElementById("user_password").value

  if(id.length > 0 & pw.length > 5){
    document.getElementById("login_button").disabled = false;
    document.getElementById("login_button").setAttribute("style", "background-color: rgb(0, 146, 246")
  } else {
    document.getElementById("login_button").disabled = true;
    document.getElementById("login_button").setAttribute("style", "background-color: rgb(178,223,252)")
  }
  
}