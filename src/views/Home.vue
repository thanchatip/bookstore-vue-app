<template>
  <div class="mt-75 layout-column justify-content-center align-items-center">
    <section class="layout-row align-items-center justify-content-center">
      <input
        type="text"
        class="large"
        placeholder="Name"
        dataTestid="appInput"
        v-model="dataTestid.appInput"
      />
      <button type="submit" class="ml-30" data-testid="submitButton">
        Add Customer
      </button>
    </section>
    <ul class="styled mt-50" data-testid="customer-list">
      <!--      Use this section for rendering each customer as it contains the requisite test-id required for tests to pass-->
      <li
        class="slide-up-fade-in"
        :dataTestid="`listItem${index}`"
        :key="`listItem${index}`"
      >{{dataTestid}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataTestid: {
          listItem: ["a", "b"],
          appInput: "",
          submitButton: (appInput) => {
            if (appInput.trim() === "") {
              this.listItem = [];
            } else {
              this.appInput.push(appInput);
            }
        },
      },
    };
  },
};
</script>

<style scoped></style>
