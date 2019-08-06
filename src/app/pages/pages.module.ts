import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ServicesComponent } from './services/services.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ServicesComponent,
    PortafolioComponent,
    TestimonialsComponent,
    BlogComponent,
    ContactComponent],
  imports: [
    CommonModule,
    ComponentsModule
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
