import { Component } from '@angular/core';
import { Libro } from './libro'
import { Escritor } from './escritor'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  libro1: Libro = new Libro('Mucho ruido y pocas nueces', 'Comedia');
  libro2: Libro = new Libro('Romeo y Julieta', 'Drama');
  librosArray: Libro[] = [this.libro1, this.libro2];

  escritor = new Escritor(1, 'Wiliam Shakespeare', new Date(1564, 3, 26), this.librosArray)
}
