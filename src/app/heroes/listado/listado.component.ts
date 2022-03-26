import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  
  heroes: string[] = ['Spiderman', 'Raven', 'Chico bestia', 'Starfire', 'Robin', 'Cyborg'];

  heroeBorrado: string = '';
  
  borrarHeroe() {
    this.heroeBorrado =  this.heroes.pop() || '';
    
  }
}
