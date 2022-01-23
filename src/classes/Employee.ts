export class Employee {
    id: number; 
    name: string;
    email: string;
    admin: boolean;

    static byId(id: number): Employee {
        let emp = new Employee();
        emp.id = id;
        emp.name = "Emp " + id;
        emp.email = id + "mail@maily.com";
        emp.admin = false;
        return emp;
    }

    static add(employee: Employee) {

    }

    static update(employee: Employee) {

    }

    static list(): Employee[] {
        return [...Array(10).keys()].map(index => (Employee.byId(index)));
    }
}