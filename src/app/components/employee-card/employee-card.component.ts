import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss'
})
export class EmployeeCardComponent {

  @Input() isSearchVisible:boolean=false

  constructor(){
    console.log(this.isSearchVisible)
  }


  results = [
    {
      name: 'Andrew Bridgen',
      designation: 'Sr. UI Developer',
      experience: 5.8,
      joiningDate: '2017',
      team: 'OCBC Singapore',
      manager: 'Lalit Agarwal',
      contact: '7406559241',
      email: 'andrew@infrrd.ai',
      rating: 3.5
    },
    {
      name: 'Andrew Bridgen',
      designation: 'Sr. UI Developer',
      experience: 5.8,
      joiningDate: '2017',
      team: 'OCBC Singapore',
      manager: 'Lalit Agarwal',
      contact: '7406559241',
      email: 'andrew@infrrd.ai',
      rating: 3.5

    }, {
      name: 'Andrew Bridgen',
      designation: 'Sr. UI Developer',
      experience: 5.8,
      joiningDate: '2017',
      team: 'OCBC Singapore',
      manager: 'Lalit Agarwal',
      contact: '7406559241',
      email: 'andrew@infrrd.ai',
      rating: 3.5

    }, {
      name: 'Andrew Bridgen',
      designation: 'Sr. UI Developer',
      experience: 5.8,
      joiningDate: '2017',
      team: 'OCBC Singapore',
      manager: 'Lalit Agarwal',
      contact: '7406559241',
      email: 'andrew@infrrd.ai',
      rating: 3.5

    }, {
      name: 'Andrew Bridgen',
      designation: 'Sr. UI Developer',
      experience: 5.8,
      joiningDate: '2017',
      team: 'OCBC Singapore',
      manager: 'Lalit Agarwal',
      contact: '7406559241',
      email: 'andrew@infrrd.ai',
      rating: 3.5

    },
    // Add other results as needed
  ];

  //   isSearchVisible = false;

  // toggleSearch() {
  //   this.isSearchVisible = !this.isSearchVisible;
  // }
}
