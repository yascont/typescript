interface Circle {
    readonly centerX: number;
    readonly centery: number;
    readonly radius: number;
}

function moveCircle(arg : Circle)
{
    console.log("can't modify the properties of a circle interface")
}