import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {HttpClient} from "@angular/common/http";
import {catchError, map, of, retry, tap} from "rxjs";
import {Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";

// import {ProductService} from "../../../services/product.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: ProductType[] = [];
  loading: boolean = false;
  // запрос продуктов из ProductService
  // constructor(private productService: ProductService) {}

  // запрос продуктов с бэкенда
  constructor(private http: HttpClient,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        tap( () => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data;
            console.log('next');
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        }
      )



    // запрос продуктов из ProductService
    // this.products = this.productService.getProducts();

    // запрос продуктов с бэкенда
    // get<ProductType[]> - это утверждение типа только для компилятора
    // в data может прийти, что угодно с бэкенда
    // 1. получение объекта [{id: 1, image: "http://testologia.site/pizza-images/product1.png", title: "Мясная Делюкс",…},…]
    // this.http.get<ProductType[]>('http://testologia.site/pizzas')
    //   .subscribe((data) => {
    //     this.products = data;
    //   })

    // 2. получение объекта data: [{id: 1, image: "http://testologia.site/pizza-images/product1.png", title: "Мясная Делюкс",…},…]
    // this.http.get<{ data: ProductType[] }>('http://testologia.site/pizzas?extraField=1')
    //   .pipe(
    //     map((result) => (result.data))
    //   )
    //   .subscribe((data) => {
    //     this.products = data;
    //   })

    // this.http.get<{ data: ProductType[] }>('http://testologia.site/pizzas?extraField=1')
    //   .pipe(
    //     tap((result) => {
    //       console.log(result);
    //     }),
    //     map((result) => (result.data))
    //   )
    //   .subscribe((data) => {
    //     this.products = data;
    //   })


    // this.http.get<{ data: ProductType[] }>('http://testologiaa.site/pizzas?extraField=1')
    //   .pipe(
    //     tap((result) => {
    //       console.log(result);
    //     }),
    //     map((result) => (result.data)),
    //     catchError(error => {
    //     throw new Error('omg');
    //     })
    //     catchError(error => {
    //     return of([]);
    //     }),
    //     retry(3)
    //   )
    //   .subscribe(
    //     {
    //       next: (data) => {
    //         this.products = data;
    //         console.log('next');
    //       },
    //       error: (error) => {
    //         console.log(error);
    //         this.router.navigate(['/']);
    //       }
    //     }
    //   )


  }


}
