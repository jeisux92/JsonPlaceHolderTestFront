import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user;

  constructor(private route: ActivatedRoute, private userService: UserService) { }
  ngOnInit() {
    this.route.params.subscribe(x => {
      this.userService.getUser(x['id']).subscribe((user: any) => {
        this.user = user;
      });
    })
  }

}
