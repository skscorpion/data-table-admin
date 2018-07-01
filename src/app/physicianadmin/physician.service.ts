import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/Rx';
// import 'rxjs/add/operator/map'
// import { map } from 'rxjs/operators';


import { IPhysician } from './physician';

@Injectable()
export class PhysicianService {
    private baseUrl = 'api/';
    physicians:IPhysician[];
    constructor(private http: Http) { }

   
    getAllPhysicians(): Promise<IPhysician[]> {
        return this.http.get(this.baseUrl+'physicians')
          .toPromise()
          .then(response => response.json() as IPhysician[])
          .catch(this.handleError);
     }
     getSelectedPhysician(): Promise<IPhysician> {
        return this.http.get(this.baseUrl+'physician')
          .toPromise()
          .then(response => response.json() as IPhysician)
          .catch(this.handleError);
     }
     private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
  getDataWithoutAddress() {
    var info = [{
          "npi": 1234567890,
          "firstname": "f1",
          "lastname": "l1",
          "address": "",
          "state": "",
          "zipcode": "",
          isUpdated:false
        },
        {
          "npi": 1234567891,
          "firstname": "f2",
          "lastname": "l2",
          "address": "",
          "state": "",
          "zipcode": "",
          isUpdated:false
        },
        {
          "npi": 1234567892,
          "firstname": "f3",
          "lastname": "l3",
          "address": "",
          "state": "",
          "zipcode": "",
          isUpdated:false
        },
        {
          "npi": 1234567893,
          "firstname": "f4",
          "lastname": "l4",
          "address": "",
          "state": "",
          "zipcode": "",
          isUpdated:false
        },
        {
          "npi": 1234567894,
          "firstname": "f5",
          "lastname": "l5",
          "address": "",
          "state": "",
          "zipcode": "",
          isUpdated:false
        }
      ];
    return info;
  }

  getDataWithAddress() {
      var info = [
          {
            "npi": 1234567890,
            "firstname": "f1",
            "lastname": "l1",
            "address": "a1",
            "state": "s1",
            "zipcode": "z1"
          },
          {
            "npi": 1234567891,
            "firstname": "f2",
            "lastname": "l2",
            "address": "a2",
            "state": "s2",
            "zipcode": "z2"
          },
          {
            "npi": 1234567892,
            "firstname": "f3",
            "lastname": "l3",
            "address": "a3",
            "state": "s3",
            "zipcode": "z3"
          },
          {
            "npi": 1234567893,
            "firstname": "f4",
            "lastname": "l4",
            "address": "a4",
            "state": "s4",
            "zipcode": "z4"
          },
          {
            "npi": 1234567894,
            "firstname": "f5",
            "lastname": "l5",
            "address": "a5",
            "state": "s5",
            "zipcode": "z5"
          }
        ];   
      return info;
  }
    // getPhysicians(): Observable<IPhysician[]> {
    //     return this.http.get(this.baseUrl)
    //         .map(this.extractData)
    //         .do(data => console.log('getPhysicians: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }
    // testApiCall(): any {
    //     return this.http
    //       .get('http://localhost:3333/api/')
    //       .map((response) => {
    //         // some response manipulation
    //         return response.json()
    //       })
    //       .toPromise();
    //   }
    // private extractData(response: Response) {
    //     let body = response.json();
    //     return body.data || {};
    // }

    // private handleError(error: Response): Observable<any> {
    //     // in a real world app, we may send the server to some remote logging infrastructure
    //     // instead of just logging it to the console
    //     console.error(error);
    //     return Observable.throw(error.json().error || 'Server error');
    // }

    initializeProduct(): IPhysician {
        // Return an initialized object
        return {
            npi: 0,
            firstName: null,
            lastName: null,
            address: null,
            state: null,
            zipcode: null,
            isUpdated: null
        };
    }
}