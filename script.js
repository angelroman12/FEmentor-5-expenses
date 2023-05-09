"use strict";

const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const days = [...data].reverse();
const daysDiv = document.querySelector(".days");

days.forEach((day) => {
  const html = `
    <div class="parent-div" >
        <div class="amount"> <p> $${day.amount}</p> </div>
        <div class="current-day"
         style="height: ${Math.floor(day.amount / 0.3)}px"></div>
        <div  class="week-day"> <p> ${day.day} </p></div>
    </div>
    `;

  daysDiv.insertAdjacentHTML("afterbegin", html);
});

const showStats = function (e) {
  if (e.target.classList.contains("current-day")) {
    const parentDiv = e.target.closest(".parent-div");
    const amountDiv = parentDiv.querySelector(".amount");
    const currentDay = parentDiv.querySelector(".current-day");

    const divheight = currentDay.getBoundingClientRect().height;

    divheight > 120
      ? currentDay.classList.toggle("current-day-big")
      : currentDay.classList.toggle("current-day-small");

    amountDiv.classList.toggle("visibility");
  }
};

daysDiv.addEventListener("mouseover", showStats);

daysDiv.addEventListener("mouseout", showStats);
