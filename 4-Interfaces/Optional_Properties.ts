interface Person {
    mail?: string;
}

function updatePerson(arg1 : Person, arg2 : Person) : Person
{   let update : Person = arg1;
    if (arg2.mail)
        update.mail = arg2.mail
    return update;
}