interface GenericIdentityFn<T> {
    (arg: T): T;
}

const identityFn: GenericIdentityFn<any> = (arg) => arg;

interface GenericArray<T> {
    items: T[]; 
    length: number; 
}
