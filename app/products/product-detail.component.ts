
import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
     selector: 'pm-product',
    templateUrl:`app/products/product-detail.component.html`
})


export class ProductDetailComponent{
    pageTitle:string='ProductDetail';


    constructor(
        private route: ActivatedRoute){
            let params:Params;
            let id=+this.route.params['id'];
             this.pageTitle+= `:${id}`;
        }
}