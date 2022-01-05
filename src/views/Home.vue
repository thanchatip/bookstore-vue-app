<template>
  <div class="my-4 banner">
    <header> 
      <h1><b>Homepage</b></h1>
      <p>Welcome to our bookstore</p>
    </header>
    <div class="my-4 card">
  <div class="card-header">
    <h2> Popular Books </h2>
  </div>
    <ol class="list-group list-group-numbered">  
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <span class="badge bg-primary rounded-pill">148</span>
    </li>
    </ol>
  </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },

};
</script>
<style>
tr:hover {
  cursor: pointer;
}
.banner h1, h2, p{
  text-align: center;
  font-family: "Raleway";
}

.card {
  width: auto;
  margin: auto;
  background: #cfcfcf;
  transition: all 0.3s;
}
</style>

