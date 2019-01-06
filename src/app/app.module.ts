import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CarListComponent } from './car-list/car-list.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarEditComponent } from './car-edit/car-edit.component';
import { FormsModule } from '@angular/forms';
import { OktaAuthModule } from '@okta/okta-angular';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { RecipesJsonComponent } from './recipes-json/recipes-json.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

const config = {
  issuer: 'https://dev-811775.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oaink7y2hcVPGmUd0h7'
};

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    HomeComponent,
    RecipesJsonComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OktaAuthModule.initAuth(config),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})

export class AppModule { }
