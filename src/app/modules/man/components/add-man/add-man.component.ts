import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ManService } from '../../man.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddMan } from '../../models/add-man.model';

@Component({
  selector: 'app-add-man',
  templateUrl: './add-man.component.html',
  styleUrls: ['./add-man.component.scss']
})
export class AddManComponent implements OnDestroy {

  addManForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(),
    city: new FormControl(''),
    country: new FormControl('')
  });


  private addManSubscribtion?: Subscription;
  errorMessages: string[] = [];

  constructor(private manService: ManService, private router: Router){}



  onFormSubmit() {


    this.errorMessages = [];

    let man:AddMan = {
      name: (this.addManForm.value.name) as string,
      age: (this.addManForm.value.age) as number,
      city: (this.addManForm.value.city) as string,
      country: (this.addManForm.value.country) as string
    };
    

    // let age:number = (this.addManForm.value.age) as number;

    // const formData: FormData = new FormData();
    // formData.append('name', (this.addManForm.value.name) as string);
    // formData.append('age', age);
    // formData.append('city', (this.addManForm.value.city) as string);
    // formData.append('country', (this.addManForm.value.country) as string);

    // console.log(formData);



    // this.addManSubscribtion = this.manService.addMan(formData)
    this.addManSubscribtion = this.manService.addMan(man)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/man');
      },
      error: error => {
        if (error.error.errors) {
          this.errorMessages = error.error.errors;
        } else {
          this.errorMessages.push(error.error);
          console.log(error);
        }
      }
    });
    
  }



  ngOnDestroy(): void {
    this.addManSubscribtion?.unsubscribe();
  }
}
