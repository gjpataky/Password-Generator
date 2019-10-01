function passwordGenerator(max, min) {
  var passwordChars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
  var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
  var randPassword = Array(randPwLen)
    .fill(passwordChars)
    .map(function(x) {
      return x[Math.floor(Math.random() * x.length)];
    })
    .join("");
  return randPassword;
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
