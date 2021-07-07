import { Injectable } from '@angular/core';
import { Band } from './band/band.model';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  constructor() { }

  bands(): Band[] {
    
  }
}
