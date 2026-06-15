module.exports = {
  OnWillCreate: {
    setNameModifier() {
      return {
        name:
          "open-notebook.commons.ablood." +
          luxon.DateTime.local().toFormat("yyyy.MM.dd"),
        promptUserForModification: true,
      };
    },
  },
  OnCreate: {
    setTitle(props) {
      return props.currentNoteName.split(".").slice(-3).join("-");
    },
    setTemplate: () => {
      return "templates.open-notebook.commons.ablood";
    },
  },
};