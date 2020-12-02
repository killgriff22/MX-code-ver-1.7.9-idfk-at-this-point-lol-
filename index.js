/*
CREDITS
@AsyncBanana
#4612 on discord & his server for helping/optimising the code!
_____________________
MX00 - no operation
MX01 - add 1 to var1
MX02 - subtrct 1 from var1
MX03 - log var1 to console
MX04 - add 1 to var2
MX05 - subtract 1 from var2
MX06 - log var2 to console
MX07 - multiply var1 & 2
MX08 - divide var1 & 2
MX09 - log the multiplacation awnser
MX0A - log the division awser
*/
const fs = require('fs')
const instructions = fs.readFileSync('file.MX', 'utf8').split('\n');
let v1 = 0;
let v2 = 0;
let holdingvar1 = 0;
let holdingvar2 = 0;
const commands = {
  MX00: () => {
    return;
  },
  MX01: (Arguments) => {
    v1 += parseFloat(Arguments[0])||1;
  },
  MX02: (Arguments) => {
    v1 -= parseFloat(Arguments[0])||1;
  },
  MX03: (Arguments) => {
    console.log(v1);
  },
  MX04: (Arguments) => {
    v2 += parseFloat(Arguments[0])||1;
  },
  MX05: (Arguments) => {
    v2 -= parseFloat(Arguments[0])||1;
  },
  MX06: (Arguments) => {
    console.log(v2);
  },
  MX07: (Arguments) => {
    holdingvar1 = v1 * v2;
  },
  MX08: (Arguments) => {
    holdingvar2 = v1 / v2;
  },
  MX09: (Arguments) => {
    console.log(holdingvar1);
  },
  MX0A: (Arguments) => {
    console.log(holdingvar2);
  },
};
for (let i = 0; i < instructions.length; i++) {
  const CommandArray = instructions[i].split(" ")
  if (commands[CommandArray[0]]) {
    commands[CommandArray[0]](CommandArray.slice(1)||[]);
 } else {if(instructions[i] === 'BEGINING OF MEMORY'||'END OF MEMORY'){}else{
   console.log("Invalid command",instructions[i])
 }}}