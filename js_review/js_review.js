/**
 *  Jacob Landowski
 *  1 - 8 - 18
 *  Full Stack Development
 *  Javascript Review
 */

intro();
fizzBuzz();

console.log('countBs("bbBBaa23zdffe") => ' + countBs("bbBBaa23zdffe"));
console.log('countChar("AlphabetA", "A") => ' + countChar("AlphabetA", 'A'));
console.log('countChar("Alphabeta", "h") +> ' + countChar("Alphabeta", 'h'));

function intro()
{
    console.log('Introduction to Javascript');
}

function fizzBuzz()
{
    for(let i = 1; i <= 100; i++)
    {
        let willPrint = '';

        if(i % 3 === 0) willPrint += 'Fizz';
        if(i % 5 === 0) willPrint += 'Buzz';

            //  if willPrint empty, prints number
        console.log(willPrint ? willPrint : i);
    }
}

function countBs(str)
{
    return countChar(str, 'B');
}

function countChar(str, char)
{
    let numOfChar = 0;

    for(let i = 0; i < str.length; i++)
    {
        if(str.charAt(i) === char) numOfChar++; 
    }

    return numOfChar;
}
