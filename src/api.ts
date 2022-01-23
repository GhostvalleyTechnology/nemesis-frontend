import axios from "axios";
import { Employee } from './service/models';
const basePath = "http://localhost:8080/api";

export const EmployeeService = function() {
    return {
        async add(employee: Employee): Promise<void> {
            return axios.post(basePath+"/employee/add", JSON.stringify(employee), {headers: {"Content-Type": "application/json"}});
        },

        async list(): Promise<Array<Employee>> {
            return fetch(basePath + "/employee/list", {method: 'GET'}).then(response => {return response.json() as Promise<Array<Employee>>});
        },
        
    }
}
