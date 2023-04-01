let userName='';
userName ? console.log(`Hello,${userName}!`):
console.log('Hello!');
const userQuestion='what is your age';
console.log(`${userQuestion} ${userName} if you wish!`);
let randomNumber=Math.floor(Math.random() * 8);
let eightBall='';
switch (randomNumber){
  case 'eightBall===0':
 console.log('It is certain');
 break;
 case 'eightBall===1':
 console.log('it is decidedly so');
 break;
 case 'eightBall===2':
 console.log('Reply hazy try again');
 break;
 case 'eightBall===3':
 console.log('Cannot predict now');
 break;
 case 'eightBall===4':
 console.log('Do not count on it');
 break;
case 'eightBall===5':
console.log('My sources say no');
break;
case 'eightBall===6':
console.log('Outlook not so good');
break;
case 'eightBall===7':
console.log('signs point to yes')
break;
default:
console.log('invalid number');
break;
}
console.log(eightBall);
