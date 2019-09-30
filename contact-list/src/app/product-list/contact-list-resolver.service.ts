import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap, catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})

export class ContactListResolverService implements Resolve<any> {
   constructor(private _http: HttpClient) { }
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
   const url = 'http://homestead.test/user';
   return this._http.get(url).pipe(catchError(error   => {
      return EMPTY
   }), mergeMap(contacts => {
         if (contacts) {
            return of(contacts)
         } else {
            return EMPTY;
         }
       })
     )
   }
 }
