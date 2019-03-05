import { Component, OnInit } from '@angular/core';
import { PopulationService } from '../services/population.service';


@Component({
  selector: 'app-population-getter',
  templateUrl: './population-getter.component.html',
  styleUrls: ['./population-getter.component.css']
})
export class PopulationGetterComponent implements OnInit {

  constructor(public s:PopulationService) { }

  ngOnInit() {
  }

  getArray():Array<any> {
    //return Array.from({ length: 19 }, (v, i) => (i+1)*5)
    return Array.from({ length: 40 }, (v, i) => i)
  }
}
