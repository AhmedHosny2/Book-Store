import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import  {BookComponent} from "./book/book.component"
import {AuthorsComponent} from "./authors/authors.component"
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'book/:id', component: BookComponent},
    {path: 'authors', component: AuthorsComponent}

];
