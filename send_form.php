<?php

$subject ="Contato";

$mail_from="$email";

$message="$company";

$header="from: $name <$email>";

$to ='paolo.lost@gmail.com';

$send_contact=mail($to,$subject,$message,$header);

if($send_contact){
echo "Rolou!";
}
else {
echo "Não Rolou";
}
?>