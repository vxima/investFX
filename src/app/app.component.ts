import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimengModule } from './shared/primeng.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimengModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'investFX';
}
