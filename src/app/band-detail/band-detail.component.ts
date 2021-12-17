import { Band } from './../bands/band/band.model';
import { BandsService } from './../bands/bands.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {

  bands: Band;

  constructor(private bandsService: BandsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bandsService.bandById(this.route.snapshot.params['id']).subscribe(bands => {
      this.bands = bands;
    });
  }

}
