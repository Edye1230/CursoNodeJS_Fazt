const os = require("node:os");

//console.log(os.arch(), os.cpus(), os.endianness(), os.freemem(), os.homedir(), os.hostname(), os.loadavg(), os.networkInterfaces(), os.platform(), os.release(), os.tmpdir(), os.totalmem(), os.type(), os.uptime(), os.version());
console.log(
  "Memoria RAM total: " + Math.trunc(os.totalmem() / 1048576) + " mb",
  "\nMemoria RAM disponible: " + Math.trunc(os.freemem() / 1048576) + " mb"
);
