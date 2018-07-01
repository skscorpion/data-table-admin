import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
// import { ProductModule } from './physicianadmin/physician.module';
import { HttpModule } from '@angular/http';
import { PhysicianData } from './physicianadmin/physician-data';
import { PhysicianSelectedData } from './physicianadmin/physician-selected-data';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(PhysicianData),
    // ProductModule,
    RouterModule.forRoot([
     
      {
        path: 'test',
        //data: { preload: true },
        loadChildren: './physicianadmin/physician.module#PhysicianModule'
    },
    { path: '', component: AppComponent }
      // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      // { path: '**', component: AppComponent }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
