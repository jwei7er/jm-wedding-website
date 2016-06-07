<?php
require 'PHPMailerAutoload.php';

include('credentials.php');

$input_data = json_decode(file_get_contents('php://input'));

if (is_null($input_data)) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
    echo json_encode(array('status' => 500, 'message' => "Invalid input."));
} else {
    if (!isset($input_data->name)) {
        header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
        echo json_encode(array('status' => 500, 'message' => "Name is required."));
    } else if (!isset($input_data->rsvp)) {
        header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
        echo json_encode(array('status' => 500, 'message' => "RSVP is required."));
    } else {
        $mail = new PHPMailer;

        $mail->isSMTP();
        $mail->Host = 'smtp.mailgun.org';
        $mail->SMTPAuth = true;
        $mail->Username = $user_name;
        $mail->Password = $password;
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
        $mail->setFrom('rsvp@weiblewedding.com', 'Weible Wedding RSVP');
        $mail->addAddress($rsvp_email);
        $mail->WordWrap = 80;
        $mail->Subject = 'Wedding RSVP for ' . $input_data->name;

        $data = "Name(s): " . $input_data->name . "\n";
        $data = $data . "RSVP: " . $input_data->rsvp . "\n";
        if (isset($input_data->email)) {
            $data = $data . "Email: " . $input_data->email . "\n";
        }
        if (isset($input_data->food)) {
            $data = $data . "Dietary Restrictions: " . $input_data->food . "\n";
        }
        if (isset($input_data->music)) {
            $data = $data . "Music Request: " . $input_data->music;
        }
        $mail->Body = "RSVP Information" . "\n\n" . $data;

        if(!$mail->send()) {
            header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
            echo json_encode(array('status' => 500, 'message' => "Problem sending email: " . $mail->ErrorInfo));
        } else {
            header($_SERVER['SERVER_PROTOCOL'] . ' 200 OK', true, 200);
            echo json_encode(array('status' => 200, 'message' => "Email sent."));
        }
    }
}
?>