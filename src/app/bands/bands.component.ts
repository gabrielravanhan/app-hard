import { BandsService } from './bands.service';
import { Component, OnInit } from '@angular/core';
import { Band } from './band/band.model';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {

  bands: Band[];

  constructor(private bandsService: BandsService) { }

  ngOnInit(): void {
    this.bands = this.bandsService.bands();
  }

}
