enum response{
    NO = 0,
    Yes = 1,
}

enum Messgae{
    Success = "SUCCESS",
    Failure = "FAILURE",
}

function test(arg : response) : void{
    if (arg == response.NO)
        console.log(Messgae.Failure)
    else
        console.log(Messgae.Success)
}

test(response.NO)