import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PortfolioSingleComponent } from './pages/portfolio-single/portfolio-single.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'project/:id', component: PortfolioSingleComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
