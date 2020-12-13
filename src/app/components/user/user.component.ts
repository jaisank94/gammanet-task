import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  email: string;
  userName: string;
  jobHistory: Array<any>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');

    this.userService.getUser(this.email).subscribe(
      res => {
        this.userName = res['name'];
      }
    );
    this.userService.getUserHistory(this.email).subscribe(
      res => {
        this.jobHistory = res;
      }
    )
  }

}
