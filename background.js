// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

setInterval(()=>{
  // Skip Intro
  Array.from(document.querySelectorAll(".skipElement")).forEach((e)=>e.click());
  // Skip Ad
  Array.from(document.querySelectorAll(".adSkipButton")).forEach((e)=>e.click());
}, 1000);