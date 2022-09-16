import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-gentleman-cadets',
  templateUrl: './gentleman-cadets.component.html',
  styleUrls: ['./gentleman-cadets.component.css']
})
export class GentlemanCadetsComponent implements OnInit {

  addGc:any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );


  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  }
  onsubmit(Form :NgForm){
    console.log('suucc');

  }
}
