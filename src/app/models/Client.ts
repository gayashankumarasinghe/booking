export interface Client{
    $key?:string;
    firstName:string;
    lastName?:string;
    email?:string;
    phone?:string;
    vehicleNo:string;
    millage?:number;
    role?:Roles;
	name?:string;

}

export interface Roles{
    user:boolean;
    admin:boolean;
}