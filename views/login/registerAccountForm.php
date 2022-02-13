<?php

function registerUserForm()
    {
        $html = '';

        $html.=' <div class="form-title">Create Account</div>
        <form id="create-user-form" method="post" onsubmit="return false">
          <div class="input-form-label"><label for="username">username</label></div>
          <p>
          <input type="text" id="username" name="username" placeholder="" required><i class="validation"><span></span><span></span></i>
          </p>
          <div class="input-form-label"><label for="phonenumber">phone</label></div>
          <p>
          <input type="tel" id="phonenumber" name="phonenumber" placeholder="" required><i class="validation"><span></span><span></span></i>
          </p>
          <div class="input-form-label"><label for="email">email</label></div>
          <p>
          <input type="email" id="email" name="email" placeholder="" required><i class="validation"><span></span><span></span></i>
          </p>
          <div class="input-form-label"><label for="user_password">password</label></div>
          <p>
          <input type="password" id="user_password" name="user_password" placeholder="" required><i class="validation"><span></span><span></span></i>
          </p>
          <p>
          <input class="form-button" type="submit" id="login" onclick="RegisterNewUserFormSubmit()" value="Submit">
          </p>
        </form>
        <div id="create-account-wrap">
    <p>Have an account? <span class="form-link" onclick="GoHome()">Sign in</span><p>
  </div>';

        echo $html;
    }

  ?>