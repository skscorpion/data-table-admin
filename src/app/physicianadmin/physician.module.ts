import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { RouterModule } from '@angular/router';
import { PhysicianadminComponent } from './physicianadmin.component';
import { PhysicianService } from './physician.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PhysicianadminComponent
      },
      
    ]),
    FormsModule
  ],
  declarations: [
    PhysicianadminComponent,
  ],
  providers: [
    PhysicianService
  ]
})
export class PhysicianModule { }
