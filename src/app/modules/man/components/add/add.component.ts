import { Component, OnDestroy } from '@angular/core';
import { AddMan } from '../../models/add-man.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ManService } from '../../man.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnDestroy{

  model: AddMan;
  private addManSubscribtion?: Subscription;

  constructor(private manService: ManService,
    private router: Router) {
    this.model = {
      name: '',
      age: 0,
      city: '',
      country: ''
    };
  }


  onFormSubmit() {
    this.addManSubscribtion = this.manService.addMan(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/man');
      }
    })
  }

  ngOnDestroy(): void {
    this.addManSubscribtion?.unsubscribe();
  }

}
