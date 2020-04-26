<template>
  <div>
    <p
      :class="{ selectedStyle: selected, noselect: true }"
      @click="toggleSelect"
    >
      {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Chip",
  props: {
    name: String
  },
  data: () => ({
    selected: false
  }),
  watch: {
    selected(val) {
      this.$emit("input", { id: this.name, status: val });
    }
  },
  methods: {
    toggleSelect() {
      this.selected = !this.selected;
    }
  }
};
</script>

<style scoped>
p {
  color: #2c3e50;
  background-color: white;
  display: inline-block;
  padding: 5px;
  margin-left: 3px;
  margin-right: 3px;
  box-sizing: border-box;
  border-radius: 25px;
  border: 2px solid #2d2d2d;
  transition: border 0.1s ease-in, background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
}

p:hover {
  background-color: #2d2d2d;
  color: #f3f3f3;
}

/*@media (hover:none),*/
/*(hover:on-demand) {*/
/*  p:hover {*/
/*    !*color: #2c3e50;*!*/
/*    !*background-color: white;*!*/
/*  }*/
/*}*/

.selectedStyle {
  background-color: #2d2d2d;
  color: #f3f3f3;
}
</style>
