import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, Store, ActionReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { storeLogger } from 'ngrx-store-logger';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

// Reducers
import { configReducer } from './store/reducers/configReducer';
import { feedReducer } from './store/reducers/feedReducer';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GraphComponent } from './components/graph/graph.component';
import { PersonalStatsComponent } from './components/personal-stats/personal-stats.component';
import { FeedComponent } from './components/feed/feed.component';
import { NewPostComponent } from './components/feed/new-post/new-post.component';
import { FeedItemComponent } from './components/feed/feed-item/feed-item.component';
import { StatComponent } from './components/personal-stats/stat/stat.component';

// Services
import { StatService } from './services/stat.service';

export function logger(reducer: ActionReducer<any>): any {
  return storeLogger()(reducer);
}

export const metaReducers = !environment.production ? [logger] : [];

const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'stats', component: StatComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraphComponent,
    PersonalStatsComponent,
    FeedComponent,
    NewPostComponent,
    FeedItemComponent,
    StatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      config: configReducer,
      feed: feedReducer
    }, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
  ],
  providers: [StatService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private store: Store<any>) {
    this.store.dispatch({
      type: 'APP_START'
    });
  }
}
