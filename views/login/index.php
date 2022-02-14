<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="assets/css/loginBody.css">

</head>
<body>
  <div id="login-form-wrap">
    <div class="form-title">Login</div>
      <form id="login-form">
        <div class="input-form-label"><label for="username">username</label></div>
          <p>
          <input type="text" id="username_login" name="username" placeholder="" required><i class="validation"><span></span><span></span></i>
          </p>
        <div class="input-form-label"><label for="password">password</label></div>
          <p>
          <input type="password" id="password_login" name="password" placeholder="" required><i class="validation"><span></span><span></span></i>
          </p>
          <p>
          <input class="form-button" onclick="validateUserCredentials()" id="login" value="Login">
          </p>
      </form>
      <div id="create-account-wrap">
        <p>Not a member? <a onclick="RegisterNewUserForm()"><span class="form-link">Create Account</span></a><p>
      </div>
  </div>

<script type="text/javascript" src="assets/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="assets/js/scripts.js"></script>
<script src="assets/js/sweetalert.min.js"></script>
