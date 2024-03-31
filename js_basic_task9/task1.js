console.log("Start")

export default function printTextWithDelay(string, delayInSeconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(string);
        }, delayInSeconds * 1000);
    })}

    printTextWithDelay("First string with delay", 2)
    .then(string => {
        console.log(string); 
    })
    .catch(error => {
        console.error(error);
    });