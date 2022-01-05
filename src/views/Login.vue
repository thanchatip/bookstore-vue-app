<template>
  <div class="login">
    <form class="inner-block my-4">
      <h3>Log in to your account</h3>
      <div class="form-group">
        <label>Email</label>
        <input
          v-model="email"
          type="email"
          class="form-control form-control-lg"
          placeholder="example@mail.com"
        />
      </div>
      <br />
      <div class="form-group">
        <label>password</label>
        <input v-model="password" type="password"
          class="form-control form-control-lg" placeholder="enter your password"/>
      </div>
      <br />
      <button type="button" class="form-control btn btn-success btn-lg btn-block">
        Log in
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "user@mail.com",
      password: "123456",
    };
  },
};
</script>
<style>
.login {
  background: #ffff !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}
.login h3 {
  text-align: center;
  margin: auto;
  line-height: 1;
  padding-bottom: 20px;
}
.login {
  width: 100%;
  height: 100%;
}

.login {
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
}

.inner-block {
  width: 450px;
  margin: auto;
  background: #cccccc;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
}

.login .form-control:focus {
  border-color: #2554ff;
  box-shadow: none;
}

label {
  font-weight: 500;
}

.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}

.social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}

.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}
.social-icons ul li a i {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.social-icons ul li a:focus i,
.social-icons ul li a:active i {
  transition: none;
  color: #222222;
}
</style>
