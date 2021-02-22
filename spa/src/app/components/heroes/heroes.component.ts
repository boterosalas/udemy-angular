import { Component, OnInit } from '@angular/core';
import { HeroesService, HeroesInterface } from '../../services/heroes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:HeroesInterface[] = []

  constructor(
    private heroes_service:HeroesService,
    private router:Router
  ) { 
    this.heroes = this.heroes_service.getHeroes();
  }

  ngOnInit(): void {
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])
  }

}