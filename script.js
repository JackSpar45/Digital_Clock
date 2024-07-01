document.addEventListener("DOMContentLoaded",function(){
    const hrElement = document.querySelector(".hr-text");
    const minElement = document.querySelector(".min-text");
    const secElement = document.querySelector(".sec-text");
    const amPmElement = document.querySelector(".am-pm-text");
    const amPmContainer = document.querySelector(".am-pm-container");
    const dateElement = document.querySelector(".date-text");
    const twelveHrBtn = document.querySelector(".twelve-hr");
    const twentyFourHrBtn = document.querySelector(".twenty-four-hr");

    let is24HourFormat = false;

    function updateTime(){
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2,"0");
        const seconds = String(now.getSeconds()).padStart(2,"0");
        let amPm = "AM";

        if(!is24HourFormat){
              amPm = hours >= 12 ? "PM" : "AM";
              hours = hours % 12 || 12;
              amPmContainer.style.display = "flex";
        } else {
              amPmContainer.style.display = "none";
        }

        hrElement.textContent = String(hours).padStart(2,"0");
        minElement.textContent = minutes;
        secElement.textContent = seconds;
        amPmElement.textContent = amPm;
    }

    function updateDate(){
        const now = new Date();
        const options = {year:'numeric', month:'long', day:'numeric'};
        const formattedDate = now.toLocaleDateString('en-GB', options);
        dateElement.textContent = formattedDate;
    }
     
    function switchTo12HourFormat(){
        is24HourFormat = false;
        updateTime();
    }
    function switchTo24HourFormat(){
       is24HourFormat = true;
       updateTime();
    }

    twelveHrBtn.addEventListener("click",switchTo12HourFormat);
    twentyFourHrBtn.addEventListener("click",switchTo24HourFormat);

    setInterval(updateTime,1000);
    updateDate();
    updateTime();
});