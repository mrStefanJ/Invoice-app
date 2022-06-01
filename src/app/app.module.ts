import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material module/material.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ToastrModule } from 'ngx-toastr';
//components
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { LoadingSpinnerComponent } from './component/loading-spinner/loading-spinner.component';
import { AddItemComponent } from './component/add-item/add-item.component';
import { ListItemComponent } from './component/list-item/list-item.component';
import { DetailItemComponent } from './component/detail-item/detail-item.component';

import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    AddItemComponent,
    ListItemComponent,
    DetailItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
