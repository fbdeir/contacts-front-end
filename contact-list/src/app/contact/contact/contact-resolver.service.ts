import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap, catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})

export class ContactResolverService implements Resolve<any> {
   constructor(private _http: HttpClient) { }
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
   var id = route.paramMap.get('id');
   const url = 'http://homestead.test/user/'+id;
   console.log(url);
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
