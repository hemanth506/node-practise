/*
    console.count()
    console.countReset()

    console.clear()

    console.trace() -> will print the stack of the function call

    console.time("func()")
    console.timeEnd()
*/

// -------------------- count and countReset ------------------------
/* 
console.count("Hemanth");
console.count("Hemanth");
console.count("Hemanth");
console.count("Ruckika");
console.count("Ruckika");
console.count("Hemanth");
console.count("Ruckika");
console.countReset("Hemanth");
console.count("Hemanth");
console.count("Hemanth");
console.count("Hemanth");
*/

// ---------------------- Trace ----------------------
/*
const fun1 = () => console.trace();
const fun2 = () => fun1();

fun2();
*/

// --------------------- Progress bar and chalk ----------------
const chalk = require("chalk");
const ProgressBar = require("progress");

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {total: 30});

const interval = setInterval(() => {
    bar.tick();
    if(bar.complete) {
        console.log(chalk.green("The interval is cleared"));
        clearInterval(interval);

    }
}, 100);
