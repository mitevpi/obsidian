<template>
  <div class="flex-row">
    <h3 v-if="title !== null">{{ title }}</h3>
    <chip
      v-for="(space, i) in data"
      :key="i"
      :name="space"
      @input="handleSelect($event)"
    />
  </div>
</template>

<script>
import Chip from "../Atoms/Chip.vue";

export default {
  name: "Chips",
  components: {
    Chip
  },
  props: {
    data: Array,
    title: String
  },
  data: () => ({
    selectedSpaces: {}
  }),
  methods: {
    handleSelect(event) {
      this.selectedSpaces[event.id] = event.status;
      const test = Object.keys(this.selectedSpaces).reduce((p, c) => {
        if (this.selectedSpaces[c]) p[c] = this.selectedSpaces[c];
        return p;
      }, {});
      this.$emit("input", Object.keys(test));
    }
  }
};
</script>

<style scoped>
h3 {
  padding-right: 5px;
}
</style>
