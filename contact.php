<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ensure this path is correct

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'Hamzaasim223@gmail.com'; // Your Gmail address
    $mail->Password   = 'axou ovyz qxom aqnh'; // Your Gmail app password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Recipients
    // You may want to validate these fields as well
    $userEmail = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL); // Sanitize user email
    $userName = htmlspecialchars($_POST['name']); // Sanitize user name

    $mail->setFrom('Hamzaasim223@gmail.com', 'Your Company'); // Your email address
    $mail->addAddress('Hamzaasim223@gmail.com'); // Your email address to receive the form submission

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body    = '<p><strong>Name:</strong> ' . $userName . '</p>'
                     . '<p><strong>Email:</strong> ' . $userEmail . '</p>'
                     . '<p><strong>Message:</strong><br>' . nl2br(htmlspecialchars($_POST['message'])) . '</p>';

                     $mail->send();
                     $response = 'success'; // Set response to success
                 } catch (Exception $e) {
                     $response = 'error'; // Set response to error
                 }
                 
                 echo $response; // Return the response

?>
