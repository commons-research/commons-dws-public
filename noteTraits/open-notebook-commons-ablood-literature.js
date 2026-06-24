module.exports = {
  OnWillCreate: {
    setNameModifier() {
      return {
        name: "open-notebook.commons.ablood.literature.",
        promptUserForModification: true,
      };
    },
  },

  OnCreate: {
    setTitle(props) {
      return props.currentNoteName
        .split(".")
        .at(-1)
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },
  },
};