import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'groupbox',
  templateUrl: './groupbox.component.html',
  styleUrls: ['./groupbox.component.scss']
})
export class GroupBoxComponent {

    @Input() name = '';
    @Input() maxHeight = '500px'; // max height is required for animation to work
    expanded = false;

    get expandedMaxHeight(): string {
      if (this.expanded) {
        return this.maxHeight;
      }
      return '0';
    }    
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
