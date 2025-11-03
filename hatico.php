<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "palawan.coron.diving@gmail.com";  // your email
    $subject = "Message from website";
    $name = strip_tags($_POST["name"]);
    $email = strip_tags($_POST["email"]);
    $message = strip_tags($_POST["message"]);

    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "✅ Thank you! Your message has been sent.";
    } else {
        echo "❌ Sorry, mail could not be sent. (Server not configured)";
    }
}
?>