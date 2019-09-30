import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact={
    id: ''
  };
  constructor(private router: Router,
    private route: ActivatedRoute) {
   }

  back() {
     this.router.navigate(['/']);
  }
  edit()
  {
    this.router.navigate(['/newContactComponent'],  {state: {data: {id: this.contact.id}}});
  }

  ngOnInit() {
    // this.route.paramMap={id: history.state.data.id};
    this.route.data.subscribe(data => this.contact=data.contact);
    console.log(this.contact);
  }
}
