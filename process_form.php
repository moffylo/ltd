<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Invalid email address.');</script>";
        echo "<script>window.location.href = 'index.html';</script>";
        exit;
    }

    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host = 'your_smtp_host';
        $mail->SMTPAuth = true;
        $mail->Username = 'your_smtp_username';
        $mail->Password = 'your_smtp_password';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        //Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('admin@moffylo.com');

        //Content
        $mail->isHTML(false);
        $mail->Subject = "Message from $name";
        $mail->Body = "Name: $name\nEmail: $email\n\n$message";

        $mail->send();
        echo "<script>alert('Message sent successfully!');</script>";
        echo "<script>window.location.href = 'index.html';</script>";
    } catch (Exception $e) {
        echo "<script>alert('Error sending message. Please try again.');</script>";
        echo "<script>window.location.href = 'index.html';</script>";
    }
}
?>
