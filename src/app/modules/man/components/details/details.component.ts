import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ManService } from '../../man.service';
import { Man } from '../../models/man.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy{

  id: number | null = null;
  paramsSubscription?: Subscription;
  man?: Man;

  constructor(private route: ActivatedRoute,
    private manService: ManService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = parseInt((params.get('id')) as string);

        if (this.id) {
          // get the data from the API for this Man Id
          this.manService.getManById(this.id)
          .subscribe({
            next: (response) => {
              this.man = response;
            }
          });

        }
      }
    });
  }


  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }
}
