import { Component, OnInit } from '@angular/core';
import { UsersComponent } from '../../user/users/users.component';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchInput: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  search() {
    this.userService.getUsers().subscribe((x: any) => {
      let sx = x.filter((user: any) => {
        return user.name.indexOf(this.searchInput) != -1;
      })
      this.userService.user.next(sx);
    })
  }
}
