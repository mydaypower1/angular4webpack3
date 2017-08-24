import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent }   from './dashboard.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';

import { PageNotFoundComponent } from './handleException/page-not-found/page-not-found.component';
import { DialogComponent, DialogResultExampleDialog } from './prettyGood/dialog/dialog.component';

//   { path: 'dashboard',  component: DashboardComponent },
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes',     component: HeroesComponent },
//   { path: '**', pathMatch: 'full', redirectTo: PageNotFoundComponent }
const routes: Routes = [
  { path: '', redirectTo: '/dialog', pathMatch: 'full' },
  { path: 'dialog',     component: DialogComponent },
  { path: 'dialogDummy',     component: DialogResultExampleDialog },
  { path: '**',     component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
