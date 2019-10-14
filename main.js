let fs = require('fs');
const shell = require("shelljs");
let server = "example.com",
  port = "80",
  webpage = "/";

let x = shell.exec(`./run.sh ${server} ${port} ${webpage} ${server} | Telnet `);

// console.log(x.stdout);

fs.writeFile(`./output/${server}.txt`, x.stdout, { flag: 'a+' }, err => { console.log(err)});
