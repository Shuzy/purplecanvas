// Timer
function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
            
            if (--timer < 0) {
                timer = "0";
                
            }

            
        }, 1000);
    }
    
    window.onload = function () {
        var fiveMinutes = 60 * 5,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    };

// refresh button
function refreshPage(){
            window.location.reload();
        } 


//setup the canvas in purple background
// function setup() {
//     createCanvas(800,800);
//     stroke(0);
// }
   
// 50 random words
var words = ['discussion', 'mug', 'mouse', 'dog', 'cat', 'paper', 'scissors', 'tulip', 'building', 'airplane', 'computer', 'music', 'travel', 'tree', 'forest', 'keyboard', 'wedding', 'device', 'foundation', 'wheel', 'seed', 'plant', 'pizza', 'error', 'football', 'owner', 'manufacturer', 'king', 'steak', 'fish', 'exam', 'contract', 'piano', 'winner', 'software', 'car', 'suv', 'rod', 'rope', 'teacher', 'student', 'worker', 'bathroom', 'office', 'sample', 'government', 'engineering', 'mud', 'coffee', 'snack', 'refrigerator', 'oven', 'road', 'health', 'exercise', 'story', 'book', 'shelf', 'goal', 'customer', 'poem', 'girlfriend', 'reception', 'chocolate', 'cheesecake', ];
var word1 = words[Math.floor(Math.random() * words.length - 1)];
var word2 = words[Math.floor(Math.random() * words.length - 1)];
var word3 = words[Math.floor(Math.random() * words.length - 1)];

