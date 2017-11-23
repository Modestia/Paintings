<?php 
	$first_name = $_POST['first_name'];
	$second_name = $_POST['second_name'];
	$email = $_POST['e-mail'];
	$phone = $_POST['phone_number'];
	$comment = $_POST['comment'];

	$to = $email;
	$subject = 'mosta322@gmail.com';
	$msg = "Client:     
		First name: $first_name
       Second name: $second_name
	        E-mail: $email 
	  Phone number: $phone
	       Comment: $comment";
	mail($to, $subject, $msg);
	header('Location: /');
 ?>