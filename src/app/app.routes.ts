import { Routes } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { Quiz } from './pages/quiz/quiz';
import { Summary } from './pages/summary/summary';

export const routes: Routes = [
  { path: '', component: Welcome },
  { path: 'quiz', component: Quiz },
  { path: 'summary', component: Summary },
  { path: '**', redirectTo: '' } // Redirects any random/broken URLs back to Welcome
];