function randomIntBetween(min, max) {
  return min + Math.floor((max + 1 - min) * Math.random());
}

function getRandomEmail(minLength, maxLength) {
  if (!minLength) minLength = 3;
  if (!maxLength) maxLength = 8;
  var text = "";
  var possibleChars = "abcdefghijklmnopqrstuvwxyz0123456789-";
  var possibleDomains = [
    '@gmail.com',
    '@mail.ru',
    '@domain.com',
    '@miro.com'
  ]
  var length = randomIntBetween(minLength, maxLength);

  for( var i = 0; i < length; i++ )
    text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));

  return text + possibleDomains[randomIntBetween(0, possibleDomains.length - 1)];
}