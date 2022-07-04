let worker = new Worker('worker.js'); //// worker declaration can run from live server
const sumBtn = document.getElementById('calculateSum');
const bgBtn = document.getElementById('changeBG');
///// calculate sum/////
sumBtn.addEventListener("click", (event) => {
    /// send the data to worker
    worker.postMessage("hello")
});
//// worker output//////
worker.onmessage = function(message) {
    alert(`The sum is ${message.data}`);

    console.log(message)
}


////BG change///////
bgBtn.addEventListener("click", (event) => {

    if (document.body.style.background !== "green") {
        document.body.style.background = "green"
    } else {
        document.body.style.background = "blue"
    }

});