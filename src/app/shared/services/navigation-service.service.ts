import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }
  toggleButton$ : Subject<string> = new Subject();

}
