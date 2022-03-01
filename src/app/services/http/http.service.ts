import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor() { }
    get(api: any) {
        return new Promise((resolve, reject) => {
            axios.get(api)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    }

}
