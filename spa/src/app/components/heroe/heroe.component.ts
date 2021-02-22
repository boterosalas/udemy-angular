import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, HeroesInterface } from '../../services/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  public heroe:any = {};

  constructor(
    private activatedRoute:ActivatedRoute,
    private heroesService:HeroesService
  ) {
    this.activatedRoute.params.subscribe(params =>{
      this.heroe = heroesService.getHeroe(parseInt(params['id']));
    })
   }

  ngOnInit(): void {
  }



}
