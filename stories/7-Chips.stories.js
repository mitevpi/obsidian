import Chips from "../src/components/Molecules/Chips";
import { action } from "@storybook/addon-actions";

export default {
  title: "Chips",
  parameters: {
    componentSubtitle: "Chips for multiple item selection"
  }
};

export const ChipSelection = () => ({
  components: { Chips },
  data: () => ({
    selectedChips: null,
    types: ['First', "Second", "Third", "Fourth", "Fifth", "Sixth"]
  }),
  template: "<chips v-model=\"selectedChips\" :data=\"types\"/>",
  methods: { action: action("clicked") }
});
