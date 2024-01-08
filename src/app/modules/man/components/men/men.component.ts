import { Component, OnInit } from '@angular/core';
import { Man } from '../../models/man.model';
import { Observable } from 'rxjs';
import { ManService } from '../../man.service';

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
    this.men$ = this.manService.getAllmen();
  }

}
