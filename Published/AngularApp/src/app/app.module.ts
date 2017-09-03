import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MatchComponent } from './core/match/match.component';
import { FirstNavigationGuard } from './startup/firstNavigation.guard';
import { ResultComponent } from './core/match/result.component';
import { RoutesNames } from './startup/routesNames';
import { StartPageComponent } from './core/startPage/startPage.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatisticsModule } from './statistics/statistics.module';

@NgModule({
  imports: [BrowserModule, CoreModule, RouterModule.forRoot([
    {
      path: RoutesNames.StartPage, component: StartPageComponent,
      canActivate: [FirstNavigationGuard]
    },
    {
      path: RoutesNames.MatchPage, component: MatchComponent,
      canActivate: [FirstNavigationGuard]
    },
    {
      path: RoutesNames.ResultsPage, component: ResultComponent,
      canActivate: [FirstNavigationGuard]
    },
    {
      path: RoutesNames.StatisticsPage, component: StatisticsComponent,
    },
    { path: '**', redirectTo: `/${RoutesNames.StartPage}` }
  ]), StatisticsModule],
  declarations: [AppComponent],
  providers: [FirstNavigationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
