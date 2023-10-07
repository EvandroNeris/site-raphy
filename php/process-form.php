<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $mensagem = $_POST["mensagem"];
  $phone = $_POST["phone"];
  
  // Configurar o destinatário do e-mail (seu endereço de e-mail do Gmail)
  $destinatario = "evandroneris95@hotmail.com";
  
  // Configurar o assunto do e-mail
  $assunto = "Nova mensagem do site de contato de $nome";
  
  // Construir o corpo do e-mail
  $corpo = "Nome: $nome\n";
  $corpo .= "Email: $email\n";
  $corpo .= "Mensagem:\n\n$mensagem";
  $corpo .= "Telefone: \n\n$phone";
  
  // Enviar o e-mail usando a função mail()
  if (mail($destinatario, $assunto, $corpo)) {
    echo "Mensagem enviada com sucesso!";
  } else {
    echo "Erro ao enviar a mensagem.";
  }
}
?>