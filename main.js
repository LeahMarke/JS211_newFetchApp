"use strict";
// require("dotenv").config();
// const api_key = process.env.SECRET_API_KEY;

// HTML selector variables
const zipCode = document.querySelector("#zip-code-entry");
const submitButton = document.querySelector(".submit");
// from API
const getZone = () => {
  const options = {
    method: "GET",
    headers: {
      // "X-RapidAPI-Key": `${api_key}`,
      "X-RapidAPI-Key": "eeef75dfaamshd4eb916f8ff46b5p15f47fjsn9726e5cf21e6",
      "X-RapidAPI-Host": "usda-plant-hardiness-zones.p.rapidapi.com",
    },
  };

  fetch(
    `https://usda-plant-hardiness-zones.p.rapidapi.com/zone/${zipCode.value}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
submitButton.addEventListener("click", () => {
  getZone();
});
// getZone();

// from Jonas
// const getZone = function (zip) {
//   const request = new XMLHttpRequest();
//   request.open(
//     "GET",
//     `https://usda-plant-hardiness-zones.p.rapidapi.com/zone/32720/${zip}`
//   );
//   request.send();
//   request.addEventListener("load", function () {
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//   });
// };
// getZone(32720);
