interface Vehicle {
    make: string;
    model: string;
    year?: number;
}

function createVehicle(arg : Vehicle) : Vehicle {
    return(arg);
}