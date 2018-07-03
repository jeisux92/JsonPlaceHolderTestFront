import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }
  users = [];
  ngOnInit() {
    this.userService.getUsers().subscribe((x: any) => {
      this.users = x;
    })

    this.userService.user.subscribe((x: any) => {
      this.users = x;
    });
  }

}
