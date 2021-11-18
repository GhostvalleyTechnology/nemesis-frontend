import { Country } from "./Country";
import { Gender } from "./Gender";
import { userId } from "../stores";

export class Client {
    id: number; 
    gender: Gender = Gender.x;
    firstName: string = "";
    lastName: string = "";
    title: string = "";
    academicDegree: string = "";
    birthday: string = "01/09/1990";
    occupation: string = "";

    email: string = "";
    phone: string = "";
    mobile: string = "";
    
    country: Country = Country.AT;
    zipCode: string = "";
    city: string = "";
    address: string = "";

    bank: string = "";
    iban: string = "";
    bic: string = "";

    static byId(id: number): Client {
        let client = new Client();
        userId.subscribe(id => client.email = id)
        client.id = id;
        client.gender = Gender.m;
        client.firstName = "Kevin";
        client.lastName = "Schmid";
        client.title = "Ing.";
        client.academicDegree = "BSc.";
        client.occupation = "Software Engineer";
        client.phone = "03149/2164";
        client.mobile = "0043 660 41 77 516";
        client.country = Country.AT;
        client.zipCode = "8010";
        client.city = "Graz";
        client.address = "Monsbergergasse 5/10";
        return client;
    }
}