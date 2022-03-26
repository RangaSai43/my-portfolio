import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppComponent } from './app.component';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'app-side-comp', component: AppSidebarComponent },
  { path: 'portfolio', component: PortfolioComponentComponent},
  // { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
