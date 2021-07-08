import { SplitPaneComponent } from './split-pane/split-pane.component';
import { PizzaCardComponent } from './pizza-card/pizza-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [PizzaCardComponent, SplitPaneComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    PizzaCardComponent,
    SplitPaneComponent
  ]
})
export class ComponentsModule { }
