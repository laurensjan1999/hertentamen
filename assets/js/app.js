window.addEventListener('load' , init , replaceNumberDetails)

//global variables
const myPlayList = {
    name: 'My Favourite 80s tracks',
    numbers: [
        {
            name: 'Wake me up be for you Go-Go',
            duration: 3.43,
            artist: 'Wham'
        },
        {
            name: 'Never gonna give you up',
            duration: 3.30,
            artist: 'Rick Astley'
        },
        {
            name: 'The final countdown',
            duration: 3.57,
            artist: 'Europe'
        }
    ]
}

/**
 * Function to initialize the application
 * @param {*} event
 */
function init(event) {
document.getElementById("sbmButton").addEventListener("click" , clickHandler);
}
//console.log(myPlayList.numbers[1].duration) TEST

/**
 * This for loop places the total playtime in je DOM
 * And places it in the html
 */
function writeTotalTime(){
event.preventDefault()
let sum =0;
for (let i = 0; i < myPlayList.numbers.length; i++) {
    sum = sum + myPlayList.numbers[i].duration}
console.log("The playlist takes " + sum + " minutes") //Place total playtime in the DOM
document.getElementById("total-airtime").innerText = sum; //places the total playtime in the HTML
}

/**
 *
 * This function replaces the HTML data
 */
function replaceNumberDetails(){
event.preventDefault()
let inputnumber = document.getElementById("inputNumber").value
for (let i = 0; i < myPlayList.numbers.length; i++) {
let songName = document.getElementById(myPlayList.numbers[i].name).innerText
if (songName === inputnumber){
    document.getElementById("artist").innerText = myPlayList.numbers[i].artist
    document.getElementById("number").innerText = myPlayList.numbers[i].name
    document.getElementById("duration").innerText = "Duration: " + myPlayList.numbers[i].duration + " minutes"

//console.log(songName + " gelukt") TEST
}}}

/**
 * This is the click handler.
 * 
 */

function clickHandler(event) {
    event.preventDefault();
    writeTotalTime()
    replaceNumberDetails()    }