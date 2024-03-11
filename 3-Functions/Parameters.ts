function createEmail(to : string, subject? : string) : string{
    if (!subject)
        return ("No Subject")
    return(subject)
}

function add(x: number, y: number, z? : number): number {
    if (z)
        return x + y + z;
    return x + y;
}