
let score=[];
let homeTeamTotal=0;
let guestteamTotal=0;
let first=1;
let second=2;
let third=3;
score=[first,second,third];

let homeScore=document.getElementById("home-score");
let guestScore=document.getElementById("guest-score");

//functions for home team buttons
function homeButton1() { 
    if(homeTeamTotal < 97){
        homeTeamTotal = homeTeamTotal + score[0];
        homeScore.textContent = homeTeamTotal;
    }
}

function homeButton2() {
    if(homeTeamTotal < 97){
        homeTeamTotal = homeTeamTotal + score[1];
        homeScore.textContent =  homeTeamTotal;
    }
}
function homeButton3(){
    if(homeTeamTotal < 97){
        homeTeamTotal = homeTeamTotal + score[2];
        homeScore.textContent = homeTeamTotal;
    }
}
//functions for guest team buttons
function guestButton1() { 
    if(guestteamTotal < 97){
        guestteamTotal = guestteamTotal + score[0];
        guestScore.textContent = guestteamTotal;
    }
}

function guestButton2() {
    if(guestteamTotal < 97){
        guestteamTotal = guestteamTotal+score[1];
        guestScore.textContent =  guestteamTotal;
    }
}
function guestButton3(){
    if(guestteamTotal < 97){
        guestteamTotal = guestteamTotal+score[2];
        guestScore.textContent = guestteamTotal;
    }
}

let min=document.getElementById("min");
let sec=document.getElementById("sec");

function start(){
    let deadline = new Date();
    deadline.setMinutes(deadline.getMinutes()+10);
 
    // To call defined fuction every second
    let x = setInterval(function () {
            
        // Getting current time in required format
        let now = new Date().getTime();

        // Calculating the difference
        let t = deadline - now;

        // Getting value of days, hours, minutes, seconds
        /*
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            */
        let minutes = Math.floor(
            (t % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor(
            (t % (1000 * 60)) / 1000);

        // Output the remaining time
        /*
        document.getElementById("demo").innerHTML =
            days + "d " + hours + "h " + 
            minutes + "m " + seconds + "s ";
        */
        min.textContent ="0"+ minutes;
        if(sec.textContent > 0 && sec.textContent < 10 ){
            sec.textContent = "0"+seconds;
        }else{
            sec.textContent = seconds;
        }
        // Output for over time
        if (t < 0) {
            clearInterval(x);
            document.getElementById("min").innerHTML = "00";
            document.getElementById("sec").innerHTML = "00";
        }
    }, 1000);
}