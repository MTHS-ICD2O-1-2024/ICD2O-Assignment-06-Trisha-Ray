// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
'use strict'

/**
 * This function gets a random dog fun fact from the API
 */
async function getDogFact() {
  try {
    const response = await fetch('https://some-random-api.ml/facts/dog')
    const data = await response.json()
    console.log(data)

    // Output the dog fact to the page
    document.getElementById('dog').innerHTML =
      '<b>dog fun fact:</b> "' + data.fact + '"<br />'
  } catch (error) {
    console.error(error)
  }
}
