---
id: spcjavj3vg70loxndmjroo2
title: Setup
desc: ''
updated: 1739346547481
created: 1693042918607
---



### Defining a Note trait for daily logs

The idea is to be able to have a template and a note trait which can easily create note following the behaviors of a Daily Journal Note.
For this we followed https://wiki.dendron.so/notes/kwgbkl58xka0zsib8uhhkfw/ and https://wiki.dendron.so/notes/bdZhT3nF8Yz3WDzKp7hqh/

I resume below the followed recipe.

#### Set the Notes trait

1. Create a new Note Trait
Run the command `Dendron: Configure Note Traits`. Give your new trait a unique name. In this example, we'll call the trait `open-notebook-commons-pmallard`. Hit Enter and a `open-notebook-commons-pmallard.js` file will appear in your editor. This is where you define your custom trait logic.

2. Add the trait behavior
Add in Javascript code to have custom settings when creating the note name and the note title.

Here we used 

```js
module.exports = {
  OnWillCreate: {
    /**
     * This example sets a prefix of 'planning', and then adds a date hierarchy
     * using the luxon module.
     */
    setNameModifier() {
      // This example sets a prefix of 'planning', and then adds a date
      // hierarchy using the luxon module.
      return {
        name: "open-notebook.commons.pma." + luxon.DateTime.local().toFormat("yyyy.MM.dd"),
        promptUserForModification: true,
      };
    },
  },
  OnCreate: {
    setTitle(props) {
      // This example will use the currentNoteName property, extract the
      // yyyy.MM.dd date portion of the note name, and then reformat it with
      // dashes.
      return props.currentNoteName.split(".").slice(-3).join("-");
    },
    /**
     * Apply a template to each note. NOTE: If you want to use this code, you
     * will need a note file called `templates.planning-template.md` in your
     * Dendron workspace.
     */
    setTemplate: () => {
      return "templates.open-notebook.commons.pmallard";
    },
  },
};
```

#### Edit the template.

You can (optionally) have a template for your journal notes.
Here I used the following [[templates.open-notebook.commons.pmallard]]. 
This template can be modified according to your needs.

#### Set a keyboard shortcut

I added a keyboard shortcut for it. But this needs to be done locally in your VSCode preferences (its not part of the published Dendron)
For this you can

1. Run the VSCode Command `Preferences: Open Keyboard Shortcuts (JSON)` (Cmd+Shift + P)
2. Add the following entry to the bottom of your keybindings.json file, with the shortcut key combo of your choice:

```json
  {
    "key": "cmd+o cmd+n",
    "command": "dendron.customCommand.open-notebook-commons-pmallard"
  }
```

For example :

- open-notebook-commons-pmallard.js

Adapt your keyboard shortcuts so that it leads to your own note traits.