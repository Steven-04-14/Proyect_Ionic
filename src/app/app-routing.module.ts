import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },  {
    path: 'prueba-numeros',
    loadChildren: () => import('./prueba-numeros/prueba-numeros.module').then( m => m.PruebaNumerosPageModule)
  },
  {
    path: 'prueba-figuras',
    loadChildren: () => import('./prueba-figuras/prueba-figuras.module').then( m => m.PruebaFigurasPageModule)
  },
  {
    path: 'prueba-abecedario',
    loadChildren: () => import('./prueba-abecedario/prueba-abecedario.module').then( m => m.PruebaAbecedarioPageModule)
  },
  {
    path: 'prueba-colores',
    loadChildren: () => import('./prueba-colores/prueba-colores.module').then( m => m.PruebaColoresPageModule)
  },
  {
    path: 'quizz-abecedario',
    loadChildren: () => import('./quizz-abecedario/quizz-abecedario.module').then( m => m.QuizzAbecedarioPageModule)
  },
  {
    path: 'resultados',
    loadChildren: () => import('./resultados/resultados.module').then( m => m.ResultadosPageModule)
  },
  {
    path: 'quizz-numeros',
    loadChildren: () => import('./quizz-numeros/quizz-numeros.module').then( m => m.QuizzNumerosPageModule)
  },
  {
    path: 'quizz-colores',
    loadChildren: () => import('./quizz-colores/quizz-colores.module').then( m => m.QuizzColoresPageModule)
  },
  {
    path: 'quizz-figuras',
    loadChildren: () => import('./quizz-figuras/quizz-figuras.module').then( m => m.QuizzFigurasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
