import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { AboutComponent } from './about/about.component';

// Angular Material Modules
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { EducationComponent } from './education/education.component';



@NgModule({
  declarations: [
    AppComponent,
    AppSidebarComponent,
    PortfolioComponentComponent,
    AboutComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
