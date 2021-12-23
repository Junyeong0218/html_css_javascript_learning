function enableButton(){
  const id = document.getElementById("user_id").value
  const name = document.getElementById("user_name").value
  const username = document.getElementById("user_nickname").value
  const pw = document.getElementById("user_password").value

  if(id.length > 0 & pw.length > 5 & name.length > 0 & username.length > 0){
    document.getElementById("signup_button").disabled = false;
    document.getElementById("signup_button").setAttribute("style", "background-color: rgb(0, 146, 246); cursor: pointer")
  } else {
    document.getElementById("signup_button").disabled = true;
    document.getElementById("signup_button").setAttribute("style", "background-color: rgb(178,223,252); cursor: default")
  } 
}

function completeSignUp() {
  alert("회원가입이 완료되었습니다!\n가입하신 아이디로 로그인해주세요.");
}