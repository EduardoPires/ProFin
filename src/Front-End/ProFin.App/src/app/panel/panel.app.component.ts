import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-root',
  template: `
    <div class="container main-container">
      <router-outlet></router-outlet>
    </div>
  `,
  standalone: false
})
export class PanelAppComponent { }
