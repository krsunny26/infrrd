import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'infrrd';

  isSearchSidenavOpen = false;

  openSearch() {
    this.isSearchSidenavOpen = true;
  }

  closeSearch() {
    this.isSearchSidenavOpen = false;
  }

  isSearchVisible = false;

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
    console.log('clicked')
  }

  hideSearch() {
    this.isSearchVisible = false;
  }
  
}
