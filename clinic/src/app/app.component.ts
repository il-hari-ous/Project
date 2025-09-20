import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './03-Signals/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clinic';
  name = 'Hariprasad';
}
