import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimengModule } from './shared/modules/primeng.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimengModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'investFX';
  menuItems: [] | undefined;
  constructor(private router: Router) {}

  simulacao() {
    this.router.navigate(['/simulacao']);
  }
  contato(){
    this.router.navigate(['/contato']);

  }
  sobre() {
    this.router.navigate(['/sobre']);

  }
}
