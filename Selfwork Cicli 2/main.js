let num = 1;
let media = 0;



for(i=1; i<=20; i++)
{

    if(num % 2 == 0)
    {
        console.log( `${num}`);
    }else
    {
        media += num;
    }

    num++;
}

console.log(`Media finale dei numeri dispari da 1 a 20: ${media/10}`);


