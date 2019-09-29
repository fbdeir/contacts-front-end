import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact=
  {
    id: '',
    email: '',
    phone: ''
  };
  id;
  constructor(private router: Router,) {
   }

  ngOnInit() {
    this.contact.id=history.state.data.id;
    this.contact.email='fake email';
    this.contact.phone='fake phone';
    //go to db and fill in contact
    
  }
  back() {
     this.router.navigate(['/']);
  }
  edit()
  {
    this.router.navigate(['/newContactComponent'],  {state: {data: {id: this.contact.id}}});
  }


}