import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatModule } from './modules/mat.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { ChartExampleOneComponent } from './chart-example-one/chart-example-one.component';
import { ChartExampleTwoComponent } from './chart-example-two/chart-example-two.component';
import { ChartThresholdComponent } from './chart-threshold/chart-threshold.component';
import { PopulationGetterComponent } from './population-getter/population-getter.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartExampleOneComponent,
    ChartExampleTwoComponent,
    ChartThresholdComponent,
    PopulationGetterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,


    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




/*

git commit -m "first commit"
git remote add origin https://github.com/bresleveloper/populationChart.git
git push -u origin master


ng build --prod --output-path docs --base-href populationChart

https://bresleveloper.github.io/populationChart
https://bresleveloper.github.io/populationChart/docs


*/