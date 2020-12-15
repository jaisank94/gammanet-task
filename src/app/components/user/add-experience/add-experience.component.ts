import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

import { UserComponent } from '../user.component';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.scss']
})
export class AddExperienceComponent implements OnInit {

  addExpForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<UserComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder, private userService: UserService) {
    this.addExpForm = this.fb.group({
      company_name: ['', Validators.required, Validators.pattern('"\\S"')],
      title: ['', Validators.required],
      start_date: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      email_id: this.data.email_id
    })
  }

  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.userService.addUserExperience(this.addExpForm.value).subscribe(
      res => {
        if (res)
          this.dialogRef.close(true);
      }
    );
  }

}
