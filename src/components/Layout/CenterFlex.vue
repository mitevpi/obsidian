<template>
  <div class="center-flex">
    <slot />
  </div>
</template>

<script>
export default {
  name: "CenterFlex"
};
</script>

<style scoped>
.center-flex {
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  flex-direction: column;
}
</style>
