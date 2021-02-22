import { Component, OnInit, Input } from '@angular/core';
import { HeroesInterface, HeroesService } from '../../services/heroes.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:HeroesInterface[] = [];
  termino:string;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
    });
  }

  ngOnInit(): void {
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])
    
  }

}
