import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<div style="height: 100vh; width: 100vw">
    <router-outlet/>
  </div>`,
  styles: [],
  imports: [RouterOutlet],
  standalone: true,
})
export class AppComponent {
  title = 'f1-pilots';
}
