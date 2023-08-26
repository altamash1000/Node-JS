// Object: . Use the `setTimeout` function to schedule a task after a specified time.

function delayedTask() {
    console.log("This message will be displayed after a delay.");
}

const delayInMilliseconds = 5000;

setTimeout(delayedTask, delayInMilliseconds);