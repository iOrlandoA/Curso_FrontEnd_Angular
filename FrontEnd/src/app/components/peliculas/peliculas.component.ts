import { Component, OnInit, DoCheck , OnDestroy} from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  public titulo: string;

  constructor(){
    this.titulo= "Componente Peliculas"
    console.log("Constructor lanzado!");
  }

  ngOnInit(){
    console.log("Componente Iniciado");
  }

  ngDoCheck(){
    console.log("DOCHECK Lanzado");
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado."
  }

  ngOnDestroy(){
    console.log("El componente se va a ELIMINAR")
  }
}
