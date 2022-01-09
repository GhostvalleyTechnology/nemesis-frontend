import { Country } from "./Country";
import { Gender } from "./Gender";
import { MaritalStatus } from "./MaritalStatus";

export class Client {
    id: number; 
    gender: Gender = Gender.x;
    firstName: string = "";
    lastName: string = "";
    fullName: string = "";
    title: string = "";
    academicDegree: string = "";
    birthday: string = '1990-01-01T00:00:00';
    birthdayPlace: string = "";
    nationality: string = "";
    occupation: string = "";
    socialInsuranceInstitution: string = "";
    militaryServiceDone: boolean = false;
    smoker: boolean = false;
    pets: string = "";
    maritalStatus: MaritalStatus = MaritalStatus.single;
    children: Child[] = [];

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
        client.id = id;
        client.gender = Gender.m;
        client.firstName = "First " + id;
        client.lastName = "Lastname" + id;
        client.fullName = client.lastName + " " + client.firstName;
        client.email = id + "mail@maily.com";
        client.title = "Ing.";
        client.academicDegree = "BSc.";
        client.occupation = "Software Engineer";
        client.phone = "01111111111" + id;
        client.mobile = "000000000000" + id;
        client.country = Country.AT;
        client.zipCode = "0000";
        client.city = "City" + id;
        client.address = "Randomstreet "+ id;
        return client;
    }

    static list(): Client[] {
        return [...Array(30).keys()].map(index => (Client.byId(index)));
    }
}

export class Child {
    name: string = "";
    birthday: string = "";
}