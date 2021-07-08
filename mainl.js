const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



const daysElement = $('.time-day .time__number');
const hoursElement = $('.time-hours .time__number');
const minutesElement = $('.time-minutes .time__number');
const secondsElement = $('.time-seconds .time__number');


const countDate = new Date('Jul 18, 2021 00:00:00').getTime();

// Function

const countdown = () => {
   const now = new Date().getTime();
   const gap = countDate - now;

   const seconds = 1000;
   const minutes = seconds * 60;
   const hours = minutes * 60;
   const days = hours * 24;

   let textDays = Math.floor(gap / days);
   let textHours = Math.floor((gap % days) / hours);
   let textMinutes = Math.floor((gap % hours) / minutes);
   let textSeconds = Math.floor((gap % minutes) / seconds);

   if (textDays < 10)
      textDays = `0${textDays}`;
   if (textHours < 10)
      textHours = `0${textHours}`;
   if (textMinutes < 10)
      textMinutes = `0${textMinutes}`;
   if (textSeconds < 10)
      textSeconds = `0${textSeconds}`;

   daysElement.innerHTML = textDays;
   hoursElement.innerHTML = textHours;
   minutesElement.innerHTML = textMinutes;
   secondsElement.innerHTML = textSeconds;

}


setInterval(countdown, 1000);