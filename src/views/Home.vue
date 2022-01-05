<template>
  <div>
      <h1 class="my-4">App List</h1>
      <div style="text-align: right" class="my-1">
        <router-link :to="{ name: 'Home' }" class="btn btn-primary">
          เพิ่มแอป
        </router-link>
      </div>
      <table class="table table-borderless table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Identifier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">i</th>
            <td>app.name }}</td>
            <td>{ app.identifier }}</td>
          </tr>
        </tbody>
      </table>
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
</style>

