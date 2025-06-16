// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict"

/**
 * This function gets a random dof  video from the API
 */
async function getDogImage() {
  try {
    const corsProxy = "https://corsproxy.io/?"
    const apiUrl = "https://random.dog/woof.json"

    const response = await fetch(corsProxy + encodeURIComponent(apiUrl))
    const data = await response.json()
    console.log(data)

    const url = data.url
    const extension = url.split(".").pop().toLowerCase()

    let output = "<b>Here's a random dog!</b>"

    if (["mp4", "webm"].includes(extension)) {
      output += `<video controls autoplay muted loop width="400">
                  <source src="${url}" type="video/${extension}">
                  </video>`
    } else {
      output += `<img src="${url}" width="400" />`
    }

    document.getElementById("dog").innerHTML = output
  } catch (error) {
    console.error(error)
    document.getElementById("dog").innerHTML = "Could not load dog image."
  }
}
