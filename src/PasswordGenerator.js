/**************************************************
 * @desc - Generates Passwords using simple hash so
 *  you can remember a simple phrase while having a
 *  more secure password
 **************************************************/
export class PasswordGenerator {
  _stringArray = [
    'l', '1', 'G', '$', 'H', 'K', 'Z', '3', 'L',
    'T', 'c', 'R', 'g', 'd', '&', 'w', 'X', 'J',
    '5', '8', 'W', 'Q', 's', 'b', 'm', 'v', 'Y',
    'p', 'x', 'D', 'I', '^', 'C', '-', '2', 'V',
    'z', '+', '@', 'q', 'U', 'P', 'i', 'N', 'u',
    'r', 'e', 'j', 'a', 't', '0', 'f', 'n', 'A',
    'F', '4', '7', 'S', 'h', 'y', '9', 'O', '#',
    'M', 'E', '*', 'o', '6', 'B', 'k'
  ];
  _numArray = [
    "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "0"
  ]
  constructor(MIN_PASS_LENGTH, MAX_PASS_LENGTH){
    this._MIN_PASS_LENGTH = MIN_PASS_LENGTH;
    this._MAX_PASS_LENGTH = MAX_PASS_LENGTH;
  }
  
  _hashPassword = (plaintext) => {
    const skipVal = [...plaintext].reduce((total,letter)=> total += this._stringArray.indexOf(letter), 0);
    let hashedString = '';
    for(let i = 0; i < plaintext.length; i++){
      if(i == plaintext.length / 2){
        hashedString += this._stringArray[(this._stringArray.indexOf(plaintext.charAt(i)) + skipVal) % this._stringArray.length].toUpperCase();
      } else if(i % 2 == 0){
        hashedString += this._stringArray[(this._stringArray.indexOf(plaintext.charAt(i)) + skipVal * (i+2)) % this._stringArray.length];
      } else {
        hashedString += this._stringArray[(this._stringArray.indexOf(plaintext.charAt(i)) + (skipVal + (i * (i+1)))) % this._stringArray.length].toUpperCase();
      }
    } 
    return hashedString;
  }
  _addNum = (plaintext) => {
    const half = plaintext.length / 2;
    let num = this._numArray[(this._stringArray.indexOf(plaintext.charAt(half))) % this._numArray.length];
    return plaintext.slice(0, half) + num + plaintext.slice(half);
  }

  getPassword = (plaintext) => {
    plaintext = plaintext.replace(/\s/g, "");
    if(plaintext.length < this._MIN_PASS_LENGTH){
      throw `Password must be greater than ${this._MIN_PASS_LENGTH} characters without whitespace`;
    } 
    else if (plaintext.length > this._MAX_PASS_LENGTH){
      throw `Password must be <= ${this._MAX_PASS_LENGTH} characters`;
    }
    for(let i = 0; i < 3; i++){
        plaintext = this._hashPassword(plaintext);
    }
    if(!(/\d/.test(plaintext))){
      plaintext = this._addNum(plaintext);
    }
    return plaintext;
  }
}