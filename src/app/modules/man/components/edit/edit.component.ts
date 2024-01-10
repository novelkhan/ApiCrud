import { Component, OnDestroy, OnInit } from '@angular/core';
import { Man } from '../../models/man.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ManService } from '../../man.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {

  id: number | null = null;
  paramsSubscription?: Subscription;
  editManSubscription?: Subscription;
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
          // get the data from the API for this category Id
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

  onFormSubmit(): void {
    const updateManRequest: Man = {
      id: (this.id) as number,
      name: this.man?.name ?? '',
      age: this.man?.age ?? 0,
      city: this.man?.city ?? '',
      country: this.man?.country ?? ''
    };

    // pass this object to service
    if (this.id) {
      this.editManSubscription = this.manService.updateMan(this.id, updateManRequest)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/man');
        }
      });
    }
  }

  onDelete(): void {
    if (this.id) {
      this.manService.deleteMan(this.id)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/man');
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editManSubscription?.unsubscribe();
  }
}
