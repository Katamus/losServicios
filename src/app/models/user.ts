import { Address } from "./address";
import { Company } from "./Company";

export class User {
    id!:number;
    name!:string;
    username!:string;
    email!:string;
    address!:Address
    phone!:string;
    website!:string;
    company!:Company;
    constructor(){
        this.phone = this.phone;
        this.website = this.website;
        this.company = this.company;
        this.address = this.address;
        this.phone = this.phone;
        this.website = this.website;
        this.company = this.company;
    }
}