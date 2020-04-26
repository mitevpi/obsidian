<template>
  <div>
    <hamburger-menu />
    <hello-world />
    <chips v-model="selectedChips" :data="types"/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    HamburgerMenu: () => import("./components/HamburgerMenu.vue"),
    HelloWorld: () => import("./components/HelloWorld.vue"),
    Chips: () => import("./components/Molecules/Chips.vue"),
  },
  data: () => ({
    selectedChips: null,
    types: ['First', "Second", "Third", "Fourth", "Fifth", "Sixth"]
  })
};
</script>

<style lang="scss">
.test {
  color: $black;
}
</style>
