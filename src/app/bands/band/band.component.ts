import { Component, Input, OnInit } from '@angular/core';
import { Band } from './band.model';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {

  @Input() band: Band;

  constructor() { }

  ngOnInit(): void {
  }

}
