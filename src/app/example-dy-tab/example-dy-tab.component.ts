import {
  AfterContentChecked,
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-example-dy-tab',
  templateUrl: './example-dy-tab.component.html',
  styleUrls: ['./example-dy-tab.component.scss'],
})
export class ExampleDyTabComponent implements OnInit {
  @ContentChild('defaultTemplate') defaultTemplate: TemplateRef<any>;

  @Input() tabs = [];

  constructor() {}

  ngOnInit(): void {}

}
