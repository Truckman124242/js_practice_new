import printTextWithDelay from './task1.js';
function runCallbackWithDelay(string, delayInSeconds, callback) {
    setTimeout(() => {
        callback(string.toUpperCase());
    }, delayInSeconds * 1000);
}
runCallbackWithDelay("Second string with delay", 3, (string) => {
    console.log(string);
});