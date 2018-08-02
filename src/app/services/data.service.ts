import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { User } from '../models/user.model';

@Injectable()
export class DataService {

  public dataLoaded;
  private users: User[];
  private jsonPath: string = './assets/users.json';
  constructor(private http: HttpClient) {}

    /**
     * load all the users from json
     */
    public loadUsers(): Observable<any> {
        return this.http.get(this.jsonPath);
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
    public getUsers()  {
        return this.users;
    }
}
