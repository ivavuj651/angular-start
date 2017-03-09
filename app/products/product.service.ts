
import {Injectable} from '@angular/core';
import {IProduct} from './product';
import {Http, Response} from '@angular/http'; 
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

private _productUrl='api/products/products.json';

constructor(private _http:Http){}

    getProducts():Promise<IProduct[]>{
        return this._http.get(this._productUrl)
                    .toPromise()
                    .then(response=> response.json() as IProduct[])
                    .catch(this.handleError);
    }

    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}