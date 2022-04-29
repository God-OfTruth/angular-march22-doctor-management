import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-username-display',
  templateUrl: './username-display.component.html',
  styleUrls: ['./username-display.component.css']
})
export class UsernameDisplayComponent implements OnInit {
  user?: User | null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.loginState$.subscribe((userInfo: User | null) => {
      this.user = userInfo;
    });
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
