import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ToggleMenuComponent } from './toggle-menu/toggle-menu.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [LoaderComponent, ToggleMenuComponent, MobileMenuComponent, LoadingComponent],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent, ToggleMenuComponent, MobileMenuComponent,LoadingComponent],
})
export class ComponentsModule { }
