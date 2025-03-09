import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  item: string = '';
  stages = ['Start', 'Step 1', 'Step 2', 'Finish'];
  stageList: any = [
    ['Tiffany'],
    ['Matt', 'Justin'],
    ['Hugo'],
    ['Bryan']
  ];

  addItem(stage: any, item: any) {
    console.log(stage, item);
    this.stageList[stage].push(item);
    this.item = '';

    console.log(this.stageList);
  }

  promoteItem(stage: any, item: any) {
    console.log('clicked', stage, item);
    this.stageList[stage].splice(this.stageList[stage].indexOf(item), 1);

    if (stage !== this.stages.length - 1) {
      this.stageList[stage + 1].push(item);
    }

  }

  demoteItem(stage: any, item: any) {
    console.log('clicked', stage, item);
    this.stageList[stage].splice(this.stageList[stage].indexOf(item), 1);

    if (stage > 0) {
      this.stageList[stage - 1].push(item);
    }
    return false;
  }


}
