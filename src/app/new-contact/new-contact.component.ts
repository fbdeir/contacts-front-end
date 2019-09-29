import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(
    private router: Router,
    private formBuilder: FormBuilder){
    
      this.newContactForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: '',
      phone: '',
      email: ''
    });
    }

    ngOnInit(){
      var id=history.state.data.id;
     
        if(id!=null){
           window.alert(id);
          this.newContactForm.setValue({
          firstName: id
        })
        }
    }

    getField(field){
      return (field==null ? '' : field);
    }

    onSubmit(contactData) {
    // Process checkout data here
      window.alert("Contact added!")
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