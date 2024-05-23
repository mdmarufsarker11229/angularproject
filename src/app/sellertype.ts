export interface seller{
    id:number;
    username:string;
    email:string;
    password:string;
}
export interface login{
    
    
    id:number;
    email:string;
    password:string;
}
export interface product{
    id:number;
    name:string;
    price:number;
    color:string;
    category:string;
    description:string;
    image:string;
    productquatity:undefined | number;
    userid:undefined |number;
}
export interface cart{
    id:number;
    name:string;
    price:number;
    color:string;
    category:string;
    description:string;
    image:string;
    productid:undefined |number;
    productquatity:undefined | number;
    userid:number;
    
}
export interface usersignup{
    id:number;
    username:string;
    email:string;
    password:string;
}

export interface userlogin{
    
    
    id:number;
    email:string;
    password:string;
}
export interface order{
    email:string,
    address:string;
    contact:string;
    userid:string;
    totalprice:number;
    id:string;
}



    
