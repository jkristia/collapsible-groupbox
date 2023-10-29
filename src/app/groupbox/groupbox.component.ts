import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'groupbox',
  templateUrl: './groupbox.component.html',
  styleUrls: ['./groupbox.component.scss']
})
export class GroupBoxComponent {

    title = 'A GroupBox';
    expanded = false;

    expandToggle(e: MouseEvent) {
        e.stopPropagation();
        this.expanded = !this.expanded;
    }
}



@NgModule({
  declarations: [
    GroupBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GroupBoxComponent,    
  ]
})
export class GroupBoxModule { }
