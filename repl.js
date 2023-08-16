/* REPL 
    => R - repeat
    => E - Evaluate
    => P - Print
    => L - Loop
*/
const repl = require("repl");

const local = repl.start("$ =>  ");

local.on("exit", () => {
    console.log("REPL is closed!");
})