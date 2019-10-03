function makePasswd() {
  var passwd = "";
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (i = 1; i < 8; i++) {
    var c = Math.floor(Math.random() * chars.length + 1);
    passwd += chars.charAt(c);
  }

  return passwd;
}
document
  .getElementByID("generatePassword")
  .addEventListener("click", function() {
    random_password = passwordGenerator(16, 8);
    document.getElementById("randomPassword").value = random_password;
  });
// change this pw into a dynamic random pw
//document.write(pw);
function copyPassword() {
  /* Get the text field */
  var copyText = document.getElementById("randomPassword");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the password: " + copyText.value);
}
