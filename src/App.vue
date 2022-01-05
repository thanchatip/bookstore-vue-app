<template>
  <div id="app">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Bookstore</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'BookList'}">Book List</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'OrderCreate'}">Order</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'UserList'}">User</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
      </ul>
      <button class="btn btn-outline-success" @click="login">Login</button>

    </div>
  </div>
</nav>
 <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './views/Home.vue'

export default {
  methods: {
    login() {
      this.$router.push({ name: 'Login' })
    }
  },

}
</script>
