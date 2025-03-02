export const sleep = (miliseconds: number) => {
    return new Promise( r => {
        setTimeout(()=> {
            r(true);
        }, miliseconds);
    });
}