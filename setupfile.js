const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter file path to append: ",function(path){
  rl.question("Enter How many lines you need: ",function(Lines){
    Lines = parseInt(Lines)
    fs.appendFile(path,'MX00\n'.repeat(Lines),(err)=>{console.log("")})
    rl.close()
  })
})