///in chrome it can run only from live server or any server////
//// work done background from btn calculate click event at background
self.onmessage = function(message) {

    let sum = 0;
    for (i = 0; i <= 1000000000; i++)
        sum += i;
    self.postMessage(sum);

}