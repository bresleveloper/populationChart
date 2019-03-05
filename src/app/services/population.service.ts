import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import {Observable, Subject, } from 'rxjs';
import {tap, } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
//can be static service
export class PopulationService {

  constructor(private http:HttpClient) { 
    this.populationSubject = new Subject<any>()
    this.population = this.populationSubject.asObservable()
  }

  //best practice is Subject-Obs
  public updateThresholdSubject:Subject<any> = new Subject<any>()
  
  private populationSubject:Subject<any>
  public population:Observable<any>

  //can use updateThresholdSubject.next in html
  //updateThreshold(v:number):void{ this.updateThresholdSubject.next(v) }

  getPopulation(fullyear:number, age:number) :void {
    //sort prop should be by mapping somewhere
    console.log(`PopulationService getPopulation ${fullyear}/${age}`)
    this.http.get(`http://api.population.io/1.0/population/${fullyear}/aged/${age}/`)
        .pipe(tap(console.log))
        .subscribe(data => this.populationSubject.next(data))
  }

}
