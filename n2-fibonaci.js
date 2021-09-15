const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function skaiciausIvedimas(msg) {
  return new Promise((resolve, reject) => {
    rl.question(msg, (data) => {
      resolve(parseInt(data));
    });
  });
}

async function tekstoIvedimas(msg) {
  return new Promise((resolve, reject) => {
    rl.question(msg, (data) => {
      resolve(data);
    });
  });
}

async function main() {
  console.log(`\nFIBONACI SKAICIU SEKA\n`);
  var sk1 = await skaiciausIvedimas("Įvesk pirmą skaičių: ");
  var sk2 = await skaiciausIvedimas("Įvesk antrą skaičių: ");
  var max = await skaiciausIvedimas("Įvesk maximumą: ");
  var string = `${sk1}, ${sk2}`;
  var sk3 = 0;
  while (sk3 <= max) {
    sk3 = sk1 + sk2;
    if (sk3 <= max) {
      string += `, ${sk3} `
    }
    sk1 = sk2;
    sk2 = sk3;
  }
  console.log(string);
  rl.close();
}
main();
