import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-dy-tab',
  templateUrl: './example-dy-tab.component.html',
  styleUrls: ['./example-dy-tab.component.scss']
})
export class ExampleDyTabComponent implements OnInit {

  @Input() tabs = []

  constructor() { }

  ngOnInit(): void {
  }

}
