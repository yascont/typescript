function concatenateStrings(...str : string[]) : string{
    return (str.join(''));
}

function maxNumber(...numbers : number[]) : number{
    let i : number = 0;
    numbers.forEach(function(num : number)
    {
        if (num > i)
            i = num;
    });
    return i;
}