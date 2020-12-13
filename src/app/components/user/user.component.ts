import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from 'src/app/services/user.service';
import { AddExperienceComponent } from './add-experience/add-experience.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  email: string;
  userName: string;
  jobHistory: Array<any>;

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');

    this.getUserName();
    this.getJobHistory();
  }

  getUserName() {
    this.userService.getUser(this.email).subscribe(
      res => {
        this.userName = res['name'];
      }
    );
  }

  getJobHistory(): void {
    this.userService.getUserHistory(this.email).subscribe(
      res => {
        this.jobHistory = res;
      }
    );
  }

  addExperience(): void {
    const expDialog = this.dialog.open(AddExperienceComponent, {
      width: '600px',
      disableClose: true,
      autoFocus: false,
      data: { email_id: this.email }
    });

    expDialog.afterClosed().subscribe(
      res => {
        if (res)
          this.getJobHistory();
      }
    )
  }

}
