const DEFAULT_SETTINGS = {
  settings: {
    advertisment: true,
    intro: true
  }
};

function activateRadioButton(idPrefix, value) {
  let element = document.querySelector(`#${idPrefix}-on`);
  if (value === false) {
    element = document.querySelector(`#${idPrefix}-off`);
  }
  element.checked = true;
}

function activateForm() {
  const options = browser.storage.sync.get();
  options.then(value => {
    if (!value || !value.settings) {
      value = DEFAULT_SETTINGS;
    }
    activateRadioButton("advertisment", value.settings.advertisment);
    activateRadioButton("intro", value.settings.intro);
  }, console.error);

  for (let querySelector of [
    "#advertisment-on",
    "#advertisment-off",
    "#intro-on",
    "#intro-off"
  ]) {
    document
      .querySelector(querySelector)
      .addEventListener("change", () => updateSettings());
  }
}

function updateSettings() {
  const advertismentValue = document.querySelector(
    'input[name="option-advertisment"]:checked'
  ).value;
  const introValue = document.querySelector(
    'input[name="option-intro"]:checked'
  ).value;
  browser.storage.sync.set({
    settings: {
      advertisment: advertismentValue === "on",
      intro: introValue === "on"
    }
  });
}

document.addEventListener("DOMContentLoaded", activateForm);
