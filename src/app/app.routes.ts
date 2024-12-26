import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './mycomponent/home/home.component';
import { DataBindingComponent } from './mycomponent/data-binding/data-binding.component';
import { PageNotFoundComponent } from './mycomponent/page-not-found/page-not-found.component';

export const routes: Routes = [

    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home',component:HomeComponent },
    {path:'data-binding',component:DataBindingComponent },
    {path:'**',component:PageNotFoundComponent }
];
