// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict"

/**
 * This function gets a random dog fact from the API
 */
async function getDogFact() {
  try {
    const corsProxy = "https://corsproxy.io/?"
    const apiUrl = "https://some-random-api.ml/facts/dog"

    const response = await fetch(corsProxy + encodeURIComponent(apiUrl))
    const data = await response.json()
    console.log(data)

    document.getElementById("show-dogfact").innerHTML =
      '<b>Random Dog Fact:</b><br />' + data.fact
  } catch (error) {
    console.error(error)
    document.getElementById("show-dogfact").innerHTML =
      "Could not load dog fact."
  }
}
