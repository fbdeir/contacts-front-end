import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { products } from '../products';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  contacts=[];

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ){
  }

  edit(id) {
    this.router.navigate(['/newContactComponent'], {state: {data: {id}}});
  }

  contactDetails(contactId){
    this.router.navigate(['',contactId],
    {state: {data:
    {
      id: contactId
    }}});
  }
  
  ngOnInit() {
    this.route.data.subscribe(data => this.contacts=data.contactList);
    console.log(this.contacts);
  }
}
