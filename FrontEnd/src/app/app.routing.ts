// Importar los modulos de del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//Importar mis componentes a los cuales les quiero hacer una página exclusiva
import { HomeComponent } from "./components/home/home.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { BlogComponent } from "./components/blog/blog.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PaginaComponent } from "./components/pagina/pagina.component";
import { ErrorNotFoundComponent } from "./components/error-not-found/error-not-found.component";

// Array de Rutas

const appRoutes: Routes= [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:"blog", component: BlogComponent},
    {path: "formulario", component: FormularioComponent},
    {path: "peliculas", component: PeliculasComponent},
    {path: "pagina-de-prueba", component: PaginaComponent},
    {path: "pagina-de-prueba/:nombre/:apellidos", component: PaginaComponent},
    {path:"**", component: ErrorNotFoundComponent}
];

// Exportar el modulo de RUTAS

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);