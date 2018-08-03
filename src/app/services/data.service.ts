import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import 'rxjs/add/observable/of';

import { User } from '../models/user.model';

/**
 * DataService to load UserList.
 */
@Injectable()
export class DataService {

    private users: any;
    private serviceURL: string = './assets/users.json';
    constructor(private http: HttpClient) { }

    /**
     * load all the users from json
     */
    public loadUsers(): Observable<any> {        
        if (this.users) {
            return Observable.of(this.users);
        }
        else {
            return this.http.get(this.serviceURL)
                .map((response: any) => {
                    debugger
                    this.users = response.users;
                    return this.users;
                });
        }
    }

    /**
     * set all the users in a list once available
     */
    public setUsers(users: User[]): void {
        this.users = users;
    }

    /**
     * get all the users
     */
    public getUsers() {
        return this.users;
    }
}
