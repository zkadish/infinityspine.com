<?php
  if (isset($_GET['firstname'])) {
    // echo "test:";
    // form data
    $firstname = $_GET['firstname'];
    // echo $firstname;
    myFunction();
  }

  function myFunction() {
    // echo "You clicked the buttonz";
    // admin@infinityspine.com
    mail('zachkadish@gmail.com', 'testx', 'testz');
  }
?>
