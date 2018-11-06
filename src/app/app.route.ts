import { Routes } from "@angular/router";
import { ListProductComponent } from "./components/list-product/list-product.component";

export const routes: Routes = [
    {path: 'list-product', component: ListProductComponent},
    {path: '', pathMatch: 'full', redirectTo: 'list-product'},
    {path: '**', pathMatch: 'full', redirectTo: 'list-product'}
];