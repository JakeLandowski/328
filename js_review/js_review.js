/**
 *  Jacob Landowski
 *  1 - 8 - 18
 *  Full Stack Development
 *  Javascript Review
 */

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
