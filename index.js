const passList = `a 1-5: abcdj
z 2-4: asfalseiruqwo
b 3-6: bhhkkbbjjjb`;

function passCheker(list) {
  let validPass = 0;
  list.split("\n").map((str) => {
    let splitedStr = str.split(" ");
    let symbol = splitedStr[0];
    let min = splitedStr[1].split("-")[0];
    let max = splitedStr[1].split("-")[1].split(":")[0];
    let password = splitedStr[2];
    if (
      password.split(symbol).length - 1 >= min &&
      password.split(symbol).length - 1 <= max
    ) {
      validPass++;
    }
  });
  console.log(validPass);
  return validPass;
}

passCheker(passList);
