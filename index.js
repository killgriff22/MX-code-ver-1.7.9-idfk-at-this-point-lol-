/*
CREDITS
@AsyncBanana#4612 on discord & his server for helping/optimising the code!
*/
const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
rl.question("Enter file path: ",async function(answer){
  if (!fs.existsSync(answer)){
    console.warn("Invalid File path")
    rl.close()
    return
  }
  const instructions = fs.readFileSync(answer, 'utf8').split('\n');
    let Variables = {}
  const commands = {
    ["//"]: ()=>{
      return
    },
  MX00: () => {
    return;
  },
  MX01: async(Arguments) => {
    Variables[Arguments[0]] += parseFloat(Arguments[1])||1;
  },
  MX02: async(Arguments) => {
    Variables[Arguments[0]] -= parseFloat(Arguments[1])||1;
  },
  MX03: async(Arguments) => {
    console.log(Variables[Arguments[0]]);
  },
  MX04: async(Arguments) => {
    Variables[Arguments[0]] = Variables[Arguments[1]] * Variables[Arguments[2]]
  },
  MX05: async(Arguments) => {
    Variables[Arguments[0]] = Variables[Arguments[1]] / Variables[Arguments[2]]
  },
  MX06: async(Arguments) => {
    Variables[Arguments[0]] = parseInt(Arguments[1])
  },
  MX07: async(Arguments) => {
    Variables[Arguments[0]] = Variables[Arguments[1]]
  },
  MX08: async(Arguments) => {
    await sleep(parseFloat(Arguments[0]))
  }
};
for (let i = 0; i < instructions.length; i++) {
  const CommandArray = instructions[i].split(" ")
  if (commands[CommandArray[0]]) {
    await commands[CommandArray[0]](CommandArray.slice(1)||[]);
 } else {
   console.log("Invalid command",instructions[i])
 }}
 rl.close()
})
