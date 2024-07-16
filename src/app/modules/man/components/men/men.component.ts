import { Component, OnInit } from '@angular/core';
import { Man } from '../../models/man.model';
import { Observable } from 'rxjs';
import { ManService } from '../../man.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit{

  men$?: Observable<Man[]>;

  constructor(private manService: ManService) {
  }

  ngOnInit(): void {
    this.loadMen();
  }

  loadMen(): void {
    this.men$ = this.manService.getAllmen();
  }

  onDirectDelete(id: number): void {        /* Solution here- https://chatgpt.com/c/13656be9-63cb-43d5-9dea-ce00599fd116 */
    if (id) {
      this.manService.deleteMan(id)
      .pipe(
        tap(() => this.loadMen())
      )
      .subscribe();
    }
  } 
}