/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "your"];
  let adj = ["great", "big", "old"];
  let noun = ["jogger", "racoon", "pal"];
  let extension = [".com", ".net", ".us", ".io"];

  for (let pronoun of pronoun) {
    for (let adj of adj) {
      for (let noun of noun) {
        for (let extension of extension) {
          document.querySelector(
            "#domains"
          ).innerHTML += `<li class="py-1">${pronoun}${adj}${noun}${extension}</li>`;
        }
      }
    }
  }
};
