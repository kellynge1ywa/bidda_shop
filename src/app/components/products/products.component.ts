import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'products',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  brandName='bida'
  notifications=['Not','Cart','Like','Profile']
  categories=['Electronics','Food','Clothing','Furniture','Phones']
  products=[
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgj9G7kscXlUY-mC_gFJle9JSUsX9A0pWj9kI3wIbszSzuYO1SFqMYZjunMC-ieHe-mXQ&usqp=CAU',
    pname:'Tecno',
    price:7000},
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJzXDtNOqZZ89XxN_G4-Bj8yi23fqKzc1NA&usqp=CAU',
      pname:'Tecno spark 4',
      price:8000
    }
  ]

}
