import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ServicesComponent } from './services/services.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioSingleComponent } from './portfolio-single/portfolio-single.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ServicesComponent,
    PortafolioComponent,
    TestimonialsComponent,
    BlogComponent,
    ContactComponent,
    PortfolioSingleComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ServicesComponent,
    PortafolioComponent,
    TestimonialsComponent,
    BlogComponent,
    ContactComponent]
})
export class PagesModule { }
