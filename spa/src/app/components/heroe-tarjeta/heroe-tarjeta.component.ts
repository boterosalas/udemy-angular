import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroesInterface, HeroesService } from '../../services/heroes.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroeInput: HeroesInterface;
  @Input() indexTest: number;
  @Output() heroeSeleccionado: EventEmitter<number>

  constructor(
    private heroes_service:HeroesService,
    private router:Router
    ) { 
      this.heroeSeleccionado = new EventEmitter();      
    }

  ngOnInit(): void {
  }

  verHeroe(idx:number){
    // this.router.navigate(['/heroe',idx])
    this.heroeSeleccionado.emit(idx)
  }

}
