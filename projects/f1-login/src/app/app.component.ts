import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
  styles: [],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'f1-login';
}
