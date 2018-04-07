import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  username = 'pawansingh972';

  searchProfile(searchKey: string): void {
    if (searchKey) {
        this.username = searchKey;
    }
  }
}
