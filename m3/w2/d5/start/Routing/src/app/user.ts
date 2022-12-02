export interface User {
    id:number,
    nome:string,
    cognome:string,
    email:string,
    rule: 'user' | 'admin' ,
}
