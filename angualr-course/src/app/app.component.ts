import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-router';
  onButtonClicked(){
    console.log('Button clicked');
  }
  onKeyup(value: string){
    console.log(`Keyup event ${value}`);
    this.title = value;
  }
}
