import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AuthGuard } from './guards/auth.guard';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import * as admin from 'firebase-admin';

const myRefreshToken = 'lab-software-2-firebase-adminsdk-6mgjg-0d12f8218b.json'; 

admin.initializeApp({
  credential: admin.credential.cert(myRefreshToken),
  databaseURL: 'https://lab-software-2.firebaseio.com'
});

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    provideFirestore(() => getFirestore())
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
