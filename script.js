document.addEventListener("DOMContentLoaded", () => {
    let mode = document.querySelector("#mode");
    let theme = document.getElementById("theme");
    let container = document.querySelector(".container");
  
    // function for toggle between light and dark node
    mode.addEventListener("click", SwitchMode);
    function SwitchMode() {
      if (container.classList.contains("light")) {
        container.classList.add("dark");
        container.classList.remove("light");
  
        this.style.color = "white";
        if (mode.classList.contains("fa-toggle-off"));
        mode.classList.remove("fa-toggle-off");
        mode.classList.add("fa-toggle-on");
      } else {
        container.classList.remove("dark");
        container.classList.add("light");
        mode.style.color = "black";
        mode.classList.remove("fa-toggle-on");
        mode.classList.add("fa-toggle-off");
      }
    }
  
    // function for showing the current time in hour and minute formate
    function showTime() {
      const timeDiv = document.querySelector(".time");
  
      const dateDiv = document.querySelector(".date");
      const Weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const Months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "Jun",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
  
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let am_pm = "AM";
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
  
      if (hours > 12) {
        if (hours >= 12) {
          hours -= 12;
          am_pm = "PM";
        }
  
        if (hours == 0) {
          hours = 12;
          am_pm = "AM";
        }
      }
      let CurrentDateTime = hours + ":" + minutes + ":" + am_pm;
      timeDiv.innerHTML = CurrentDateTime;
  
      let day = Weekday[date.getDay()];
      let mont = Months[date.getMonth()];
      let dateNow = date.getDate();
  
      let currentDate = day + ", " + mont;
      dateDiv.innerHTML = currentDate + ", " + dateNow;
    }
    setInterval(showTime, 1000);
    showTime();
  
    // function to run the dynamic clock with the current time
    function runClock() {
      let hourhand = document.querySelector(".hour");
      let minutehand = document.querySelector(".minute");
      let secondhand = document.querySelector(".second");
      let sound = document.getElementById("sound");
  
      const date = new Date();
      const s = date.getSeconds();
      const secondDegree = (s / 60) * 360 + 90;
  
      const m = date.getMinutes();
      const minutDegree = (m / 60) * 360 + (s / 60) * 6 + 90;
  
      const h = date.getHours();
      const hourDegree = (h / 12) * 360 + (m / 60) * 30 + 90;
  
      secondhand.style.transform = `rotate(${secondDegree}deg)`;
      minutehand.style.transform = `rotate(${minutDegree}deg)`;
      hourhand.style.transform = `rotate(${hourDegree}deg)`;
    }
    setInterval(runClock, 1000);
    runClock();
  
    // function for changing the clock theme/background
    theme.addEventListener("click", changeBackground);
    function changeBackground() {
      let letter = "0123456789";
      let color = `#`;
      for (let i = 0; i < 6; i++) {
        color += letter = Math.floor(Math.random() * 6);
      }
      container.style.backgroundColor = color;
    }
  });
  
  // function runStrip() {
  //     let strip = document.querySelector('.datentime');
  //     const Weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  //     const day = []
  //     let text = "";
  //     for (let i = 0; i < 32; i++) {
  //         text += i + "<br>";
  //         strip.innerHTML = text;
  //     }
  
  //     // const stripDate = new Date();
  //     // const StripDay = Weekday[stripDate.getDay()]
  //     // const dateToday = stripDate.getDate();
  //     // strip.innerHTML = StripDay + ":" + dateToday;
  // }
  // runStrip();
  
  function updateDateStrip() {
    const date = new Date();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    const currentDay = dayNames[date.getDay()];
    const currentDate = date.getDate();
  
    const nextDateObj = new Date(date);
    nextDateObj.setDate(currentDate + 1);
    const nextDay = dayNames[nextDateObj.getDay()];
    const nextDate = nextDateObj.getDate();
  
    document.getElementById("current-day").innerHTML = currentDay + ":";
    document.getElementById("current-date").innerHTML = currentDate;
    document.getElementById("next-day").innerHTML = nextDay + ":";
    document.getElementById("next-date").innerHTML = nextDate;
  
    const currentTime =
      date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    const percentageOfDayPassed = currentTime / 86400;
  
    const dateContent = document.querySelector(".date-content");
    dateContent.style.transform = `translateY(${
      100 - percentageOfDayPassed * 100
    }%)`;
  }
  updateDateStrip();
  setInterval(updateDateStrip, 1000);
  