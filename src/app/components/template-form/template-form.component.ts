import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUserFormData } from 'src/app/models/user.model';
import { UserformService } from 'src/app/services/userform.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @ViewChild('userFormDetails') form: NgForm;
  public userForm: IUserFormData;
  constructor(public userFormService: UserformService) {
    this.userForm = {} as IUserFormData;
    this.form = {} as NgForm;
  }

  ngOnInit(): void {
    setTimeout(() => {
      for (const key in this.form.controls) {
        console.log(this.form.controls);
        this.form.controls[key].markAllAsTouched();
      }
    });
  }

  public onSubmit(fromData: IUserFormData): void {
    // will submit the userform data to jsonserver backend
    // Check if all values in the form data are not empty
    const isFormValid = Object.values(fromData).every(value => !!value)
    if (isFormValid) {
      this.userFormService.sendTempalteFormDataDetails(this.userForm).subscribe((
        response: IUserFormData
      ) => {
        console.log("response from json-server", response)
      })
    }
    /* this.userFormService.sendTempalteFormDataDetails(this.userForm).subscribe(
      (response: IUserFormData) => { console.log("reponse from json-server", response) }
    ) */
  }
}
