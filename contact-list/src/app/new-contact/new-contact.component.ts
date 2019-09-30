import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import {catchError} from 'rxjs/operators/catchError';

@Component({
  selector: '',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent {
  newContactForm;
  firstName: String;
  lastName: String;
  phone: String;
  email: String;
  contact={};

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient){

      this.newContactForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: '',
      phone: '',
      email: ''
    });
    }

    ngOnInit(){
        if(!(typeof history.state.data ==="undefined") && history.state.data.id!=null){
          this.newContactForm.setValue({
            firstName: history.state.data.firstName,
            lastName: history.state.data.lastName,
            phoneNumber: history.state.data.phoneNumber,
            email: history.state.data.email
        })
        }
    }

    getField(field){
      return (field==null ? '' : field);
    }

    onSubmit(contactData) {
    // Process checkout data here
    return this.http.post('http://homestead.test/user', contactData)
    // .pipe(
    //   catchError(this.handleError('addContact', contactData))
    // )
    ;
      this.router.navigate(['/']);
    }
    cancel(){
      this.router.navigate(['/']);
    }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
