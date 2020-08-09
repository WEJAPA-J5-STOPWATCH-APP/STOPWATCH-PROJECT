//Declaring Variables for each time values
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

//this variable holds the display values
let displayMilliseconds = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;


//Variavle that holds set interval function
let interval = null;

//variable that holds stopwatch status
let status = "stopped";


//Stopwatch function that determines when to increment value
function stopWatch() {

    milliseconds++;

    if (milliseconds / 100 === 1) {
        milliseconds = 0;
        seconds++;

        if (seconds / 60 === 1) {
            seconds = 0;
            minutes++;

            if (minutes / 60 === 1) {
                minutes = 0;
                hours++;
            }
        }
    }

    //adds a '0' string when time values are only one digit
    if (milliseconds < 10) {
        displayMilliseconds = '0' + milliseconds.toString();
    } else {
        displayMilliseconds = milliseconds;
    }

    if (seconds < 10) {
        displaySeconds = '0' + seconds.toString(); 
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = '0' + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = '0' + hours.toString();
    } else {
        displayHours = hours;
    }

    //Time value displayed to stopwatch users
    document.getElementById('display').innerHTML = displayHours + ':' + displayMinutes + ':' + displaySeconds + ':' + displayMilliseconds; 

}


//function that makes the start/stop button works
function startStop() {
    if (status === "stopped") {
        interval = window.setInterval(stopWatch, 10);
        document.getElementById("startStop").innerHTML = "<i class=\"fa fa-pause\"></i><br/>  STOP";
        status = 'started';


    } else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "<i class=\"fa fa-play\"></i><br/> START";
        status = "stopped";

        //records the lap value in a list
        let li = document.createElement('li');
        li.innerHTML =  `Lap Time is:  ${displayHours} : ${displayMinutes} : ${displaySeconds} : ${displayMilliseconds}`;
        let lapRecords = document.querySelector('#lap-list');
        lapRecords.appendChild(li);
    }
};

//the function that clears the lap value displayed
function lapClear() {
    let lapRecords = document.querySelector('#lap-list');
    lapRecords.innerHTML = "";
}



//this function resets the stopwatch time value whenever the reset button is clicked
function reset() {
    window.clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('display').innerHTML = "00:00:00:00";
    document.getElementById('startStop').innerHTML = "<i class=\"fa fa-play\"></i> START";
}