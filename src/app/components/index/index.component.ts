import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent {
  constructor(private router: Router) {}
  form() {
    this.router.navigate(['/form']);
  }
}
