<?php

require('views/login/registerAccountForm.php');

class createUserController extends Administrator{
    
    function registerUser()
    {
        registerUserForm();
    }

    function registerUserFormSubmit()
    {
        if(!Administrator::isValidRegularExpression("/^[A-Z]+$/i", $_POST["username"]))
        {
            $respose["status"]["error"] = "username";
            $respose["status"]["errorMessage"] = (trim($_POST["username"]) == '') ? "empty" : "match";
            echo json_encode($respose);
            return;
        }
        if(!Administrator::isValidRegularExpression("/^[+]\d{8}.$/", $_POST["phonenumber"]))
        {
            $respose["status"]["error"] = "phonenumber";
            $respose["status"]["errorMessage"] = (trim($_POST["phonenumber"]) == '') ? "empty" : "match";
            echo json_encode($respose);
            return;
        }
        if(!Administrator::isValidRegularExpression("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/", $_POST["email"]))
        {
            $respose["status"]["error"] = "email";
            $respose["status"]["errorMessage"] = (trim($_POST["email"]) == '') ? "empty" : "match";
            echo json_encode($respose);
            return;
        }
        if(!Administrator::isValidRegularExpression("/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-6])(?=.*?[*-.]).{6}$/", $_POST["user_password"]))
        {
            $respose["status"]["error"] = "password";
            $respose["status"]["errorMessage"] = (trim($_POST["user_password"]) == '') ? "empty" : "match";
            echo json_encode($respose);
            return;
        }

        $respose["status"] = "success";
            
        echo json_encode($respose);
        
    }


}

?>