import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userName$: Observable<string | null>;

  constructor(private authService: AuthService) {
    this.userName$ = this.authService.user$.pipe(
      map((user) => {
        if (!user) {
          return user;
        }
        return user.displayName ? user.displayName : user.email;
      })
    );
  }

  ngOnInit(): void {}
}
