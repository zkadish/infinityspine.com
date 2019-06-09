<?php
  if (isset($_GET['firstname'])) {
    // echo "test:";
    // form data
    $firstname = $_GET['firstname'];
    // echo $firstname;
    myFunction();
  }

  $MAIL_TO = 'zachkadish@gmail.com';
  $SUBJECT = 'This is the subject of the email';
  $MESSAGE = 'This is the message of the email';

  function myFunction() {
    // echo "You clicked the buttonz";
    // admin@infinityspine.com
    mail($MAIL_TO, $SUBJECT, $MESSAGE);
  }
?>
