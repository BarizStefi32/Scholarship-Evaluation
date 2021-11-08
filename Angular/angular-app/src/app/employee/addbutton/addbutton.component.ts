import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbutton',
  templateUrl: './addbutton.component.html',
  styleUrls: ['./addbutton.component.scss']
})
export class AddbuttonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee(): void {

    this.router.navigateByUrl('/addEmployee');
  }

}
