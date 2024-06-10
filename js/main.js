$(document).ready(function () {
  // Máscara
  $("#phone").mask("(00) 00000-0000");

  // Validação
  $("form").validate({
    rules: {
      firstname: {
        required: true,
        minlength: 3,
      },
      lastname: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
      },
      password: {
        required: true,
        minlength: 8,

      },
      confirmpassword: {
        required: true,
        minlength: 8,
      },
    },
    messages: {
      firstname: {
        required: "Por favor, insira seu primeiro nome.",
        minlength: "Seu primeiro nome deve conter pelo menos 3 letras.",
      },
      lastname: {
        required: "Por favor, insira seu sobrenome.",
        minlength: "Seu sobrenome deve conter pelo menos 3 letras.",
      },
      email: {
        required: "Por favor, insira seu e-mail.",
        email: "Por favor, insira um e-mail válido.",
      },
      phone: {
        required: "Por favor, insira seu telefone.",
      },
      password: {
        required: "Por favor, insira sua senha.",
        minlength: "Sua senha deve conter pelo menos 8 caracteres.",
      },
      confirmpassword: {
        required: "Por favor, confirme sua senha.",
        minlength: "Sua senha deve conter pelo menos 8 caracteres.",
      },
    },
  });
});