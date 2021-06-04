<?php
    if ($_POST) {
        $guest_name = "";
        $guest_email = "";
        $guest_subject = "";
        $guest_message = "";
        $email_body = "<div>";
          
        if (isset($_POST["name"])) {
            $guest_name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
            $email_body .= "<div>
                                <label><b>Guest Name:</b></label>&nbsp;<span>".$guest_name."</span>
                            </div>";
        }
     
        if (isset($_POST["email"])) {
            $guest_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST["email"]);
            $guest_email = filter_var($guest_email, FILTER_VALIDATE_EMAIL);
            $email_body .= "<div>
                                <label><b>Guest Email:</b></label>&nbsp;<span>".$guest_email."</span>
                            </div>";
        }
          
        if (isset($_POST["subject"])) {
            $email_title = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
            $email_body .= "<div>
                                <label><b>Subject Matter:</b></label>&nbsp;<span>".$guest_subject."</span>
                            </div>";
        }
          
        if (isset($_POST["message"])) {
            $guest_message = htmlspecialchars($_POST["message"]);
            $email_body .= "<div>
                                <label><b>Guest Message:</b></label>
                                <div>".$guest_message."</div>
                            </div>";
        }
     
        $email_body .= "</div>";
        $recipient = "jmarkusm@me.com";
          
        mail($recipient, $guest_subject, $email_body);
        header("Location: index.html");
    }
?>