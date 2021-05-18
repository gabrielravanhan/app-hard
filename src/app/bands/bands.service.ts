import { Injectable } from '@angular/core';
import { Band } from './band/band.model';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  ban: Band[] = [
    {
      id_banda: 1,
      avaliacao: 5.0,
      nome: 'AC/DC',
      lider: ' Angus Young',
      genero: 'Hard rock',
      image_path: 'assets/img/bands/ac-dc.jpg'
    },

    {
      id_banda: 2,
      avaliacao: 5.0,
      nome: 'Aerosmith',
      lider: 'Steven Tyler',
      genero: 'Hard rock',
      image_path: 'assets/img/bands/aerosmith.jpg'
    },

    {
      id_banda: 3,
      avaliacao: 5.0,
      nome: 'Bon Jovi',
      lider: 'Jon Bon Jovi',
      genero: 'Hard rock',
      image_path: 'assets/img/bands/bon-jovi.jpg'
    },

    {
      id_banda: 4,
      avaliacao: 5.0,
      nome: "Guns N' Roses",
      lider: 'Axl Rose',
      genero: 'Hard rock',
      image_path: 'assets/img/bands/guns.jpg'
    },

    {
      id_banda: 5,
      avaliacao: 5.0,
      nome: 'Kiss',
      lider: 'Paul Stanley',
      genero: 'Hard rock',
      image_path: 'assets/img/bands/kiss.jpg'
    },

    {
      id_banda: 6,
      avaliacao: 5.0,
      nome: 'Led Zeppelin',
      lider: 'Robert Plant',
      genero: 'Hard rock',
      image_path: 'assets/img/bands/led.jpg'
    },

    {
      id_banda: 7,
      avaliacao: 5.0,
      nome: 'Nirvana',
      lider: 'Kurt Cobain',
      genero: 'Grunge',
      image_path: 'assets/img/bands/nirvana.jpg'
    },

    {
      id_banda: 8,
      avaliacao: 5.0,
      nome: 'Scorpions',
      lider: 'Klaus Meine',
      genero: 'Hard Rock',
      image_path: 'assets/img/bands/scorpions.jpg'
    }
  ];

  constructor() { }

  bands(): Band[] {
    return this.ban;
  }
}
