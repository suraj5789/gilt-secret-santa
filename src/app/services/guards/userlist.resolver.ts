import { Observable } from 'rxjs/Observable';
import { User } from './../../models/user.model';
import { ActivatedRoute, 
  ActivatedRouteSnapshot,
RouterStateSnapshot } from '@angular/router';
import { DataService } from './../data.service';
import { Injectable } from '@angular/core';

interface Resolve<T> { 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> | Promise<T> | T
}

@Injectable()
export class UserListResolver implements Resolve<User[]> {
  constructor(private dataService: DataService) {}
 
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.dataService.loadUsers();
  }
}