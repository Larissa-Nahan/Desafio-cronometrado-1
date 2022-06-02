
function validateForm() {
    const $name = document.forms["form"]["name-field"].value;
    const $email = document.forms["form"]["email-field"].value;
    const $password = document.forms["form"]["password-field"].value;
    const $newPassword = document.forms["form"]["newPassword-field"].value;
    
    let valid = 0;
    let success = 1;

  if ($name.length <= 3) {
    alert("Digite um nome válido!");
    success = 0;
  }

  for (let i = 0; i < $email.length; i++) {
    if ($email[i] === "@") {
      valid = 1;
    }
  }

  if (valid === 0) {
    alert("Digite um email válido!");
    success = 0;
  }

  if ($password != $newPassword) {
    alert("As senhas devem ser iguais!");
    success = 0;
  }
  
  if (success) {
    alert("Registro feito com sucesso! Obrigado.");
  }
}

