import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detalles-cultivo/:id',
    loadChildren: () => import('./detalles-cultivo/detalles-cultivo.module').then( m => m.DetallesCultivoPageModule)
  },
  {
    path: 'registros/:id',
    loadChildren: () => import('./registros/registros.module').then( m => m.RegistrosPageModule)
  },
  {
    path: 'registrar-cultivo',
    loadChildren: () => import('./registrar-cultivo/registrar-cultivo.module').then( m => m.RegistrarCultivoPageModule)
  },
  {
    path: 'registrar-actividad',
    loadChildren: () => import('./registrar-actividad/registrar-actividad.module').then( m => m.RegistrarActividadPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
