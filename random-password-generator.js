/**
 * Created by pc on 1/9/2017.
 */


function generatePassword() {
  let length = 8,
    vowels = "aeiou",
    consonants = "bcdfghjklmnpqrstvwx",
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    passwd = "";
  for (var i = 0; i < length; ++i) {
    if (i % 2) {
      passwd += consonants.charAt(Math.floor(Math.random() * consonants.length))
    } else {
      passwd += vowels.charAt(Math.floor(Math.random() * vowels.length))
    }
    //retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return passwd + Math.floor(Math.random() * 100);
}

console.log(generatePassword());