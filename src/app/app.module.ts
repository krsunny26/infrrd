import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SearchComponent } from './components/search/search.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { MatMenuModule } from '@angular/material/menu';  // Add this line
import { StarRatingModule } from 'angular-star-rating';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EmployeeCardComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule,
    StarRatingModule.forRoot(),

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
