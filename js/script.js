// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
'use strict'
/**
 * This function gets a random dog fact using the dog facts API,
 * with a CORS proxy to allow browser access.
 */
async function getDogFact() {
  try {
    const proxyURL = "https://api.allorigins.win/raw?url="
    const apiURL = "https://dog-api.kinduff.com/api/facts"

    const resultJSON = await fetch(proxyURL + encodeURIComponent(apiURL))
    const jsonData = await resultJSON.json()
    console.log(jsonData)

    const fact = jsonData.facts[0]

    document.getElementById("results").innerHTML = `<p>Dog Fact: ${fact}</p>`
  } catch (error) {
    console.error(error)
    document.getElementById("results").innerHTML =
      "<p>There was an error fetching the dog fact.</p>"
  }
}
