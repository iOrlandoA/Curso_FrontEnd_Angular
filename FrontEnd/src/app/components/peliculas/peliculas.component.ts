import { Component} from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  public titulo: string;
  public peliculas: Array<any>;

  constructor(){
    this.titulo= "Componente Peliculas"
    this.peliculas=[
      {year : 2019, title:"Spiderman 4", image:'https://i.blogs.es/c7ed10/screenshot_90/1366_2000.jpeg'},
      {year : 2015, title:"The Avengers EndGame", image:'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/04/hipertextual-nuevo-trailer-avengers-endgame-agradece-fans-universo-marvel-2019351167.jpg?fit=1600%2C900&quality=50&strip=all&ssl=1'},
      {year : 2016, title:"El Hoyo", image:'https://i.blogs.es/b86e54/el-hoyo-escena/1366_2000.jpeg'},
      {year : 2011, title:"El Hoyo 2", image:'https://i.blogs.es/b86e54/el-hoyo-escena/1366_2000.jpeg'}
      
    ]
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
