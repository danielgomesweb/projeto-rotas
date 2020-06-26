import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor (readonly rota: ActivatedRoute){}
	ngOnInit(){
		console.log(this.rota);
	}
}
