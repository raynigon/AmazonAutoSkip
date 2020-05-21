// Copyright 2018 Simon Schneider. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";

const DEFAULT_SETTINGS = {
  settings: {
    advertisment: true,
    intro: true
  }
};

const createSkipWithSelectorInterval = (selector, timeout) => {
  setInterval(() => {
    Array.from(document.querySelectorAll(selector)).forEach(e => e.click());
  }, timeout);
};

(() => {
  const options = browser.storage.sync.get();
  options.then(value => {
    if (!value || !value.settings) {
      value = DEFAULT_SETTINGS;
    }
    if (value.settings.advertisment) {
      // Skip Ad
      createSkipWithSelectorInterval(".adSkipButton", 1000);
      createSkipWithSelectorInterval(".f1cw2swo", 1000);
    }
    if (value.settings.intro) {
      // Skip Intro
      createSkipWithSelectorInterval(".skipElement", 1000);
      createSkipWithSelectorInterval(".f1oordr3", 1000);
    }
  }, console.error);
})();
