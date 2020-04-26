function randomIntBetween(min, max) {
  return min + Math.floor((max + 1 - min) * Math.random());
}

function getRandomEmail(minLength, maxLength) {
  if (!minLength) minLength = 3;
  if (!maxLength) maxLength = 8;
  let text = "";
  const possibleChars = "abcdefghijklmnopqrstuvwxyz0123456789-";
  const possibleDomains = [
    '@gmail.com',
    '@mail.ru',
    '@domain.com',
    '@miro.com'
  ]
  const length = randomIntBetween(minLength, maxLength);

  for( let i = 0; i < length; i++ )
    text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));

  return text + possibleDomains[randomIntBetween(0, possibleDomains.length - 1)];
}