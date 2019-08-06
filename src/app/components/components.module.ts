import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ToggleMenuComponent } from './toggle-menu/toggle-menu.component';



@NgModule({
  declarations: [LoaderComponent, ToggleMenuComponent,],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent, ToggleMenuComponent],
})
export class ComponentsModule { }
