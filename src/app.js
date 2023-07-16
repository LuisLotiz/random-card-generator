/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".number").innerHTML = randomNumber();
  document.querySelector("#suits").innerHTML = suit;
  document.querySelector("#suits1").innerHTML = suit;
  document.querySelector(".bottomSuit").classList.add(suitColor());
  document.querySelector(".topSuit").classList.add(suitColor());
};

const randomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let index = Math.floor(Math.random() * numbers.length);
  return numbers[index];
};

const randomSuit = () => {
  let suits = ["♦", "♥", "♠", "♣"];
  let index = Math.floor(Math.random() * suits.length);
  return suits[index];
};

const suit = randomSuit();

const suitColor = () => {
  const color = suit === "♦" || suit === "♥" ? "red" : "black";
  return color;
};
