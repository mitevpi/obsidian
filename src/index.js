import Vue from "vue";

import HelloWorld from "./components/HelloWorld.vue";
import HamburgerMenu from "./components/HamburgerMenu.vue";
import Chip from "./components/Atoms/Chip.vue";
import Chips from "./components/Molecules/Chips.vue";
import CenterFlex from "./components/Layout/CenterFlex.vue";

const Components = {
  HelloWorld,
  HamburgerMenu,
  Chip,
  Chips,
  CenterFlex
};

Vue.component("HelloWorld", HelloWorld);
Vue.component("HamburgerMenu", Chip);
Vue.component("Chip", HamburgerMenu);
Vue.component("Chips", Chips);
Vue.component("CenterFlex", CenterFlex);

export { HelloWorld };
export { HamburgerMenu };
export { Chip };
export { Chips };
export { CenterFlex };

// Export the library as a plugin
export default Components;
