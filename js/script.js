// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
/**
 * This function gets a random anime quote.
 */
async function getAnimeQuote() {
  try {
    const resultJSON = await fetch("https://anime-chan.herokuapp.com/api/quotes")
    const jsonData = await resultJSON.json()
    console.log(jsonData)

    const quote = jsonData.data.content
    const character = jsonData.data.character.name
    const anime = jsonData.data.anime.name

    // output (plain text)
    document.getElementById("anime").innerHTML = 
      "<p>Anime: " + anime + "<br>" +
      "Character: " + character + "<br>" +
      "Quote: \"" + quote + "\"</p>"
  } catch (error) {
    console.error(error)
    document.getElementById("anime").innerHTML = "<p>There was an error fetching the quote.</p>"
  }
}
