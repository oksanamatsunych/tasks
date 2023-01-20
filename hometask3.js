const name = "iPhone";
const oldModelVersion = 11;
const oldModelUSDPrice = 799;
const newModelVersion = 15;
const newModelUSDPrice = 1999;
const uahUSDRate = 29;

const message1 = `Old ${name} ${oldModelVersion} cost $ ${oldModelUSDPrice} in 2019, new ${name} ${newModelVersion} costs $ ${newModelUSDPrice} today. `;
console.log(message1);

const message2 = `New version of ${name} is ${newModelUSDPrice - oldModelUSDPrice} more expensive than previous `;
console.log(message2);

const message3 = `In Ukraine these prices are ${oldModelUSDPrice * 29} UAH and ${newModelUSDPrice * 29} UAH respectively`;
console.log(message3);
