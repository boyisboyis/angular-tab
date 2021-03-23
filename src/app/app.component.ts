import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { Tab } from './example-dy-tab/tab.model';
import { FirstTabComponent } from './tab-content/first-tab-content.component';
import { SecondTabComponent } from './tab-content/second-tab-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-tab';
  @ViewChild('tabThird') tabThirdTmp: TemplateRef<any>;

  tabs: Tab[] = [];

  constructor(
    private cdr:ChangeDetectorRef
  ) {
  }

  ngAfterViewInit() {
    this.tabs = [
      {
        label: 'First Tab',
        component: FirstTabComponent,
      },
      {
        label: 'Second Tab',
        component: SecondTabComponent,
      },
      {
        label: 'Third Tab',
        template: this.tabThirdTmp,
      },
      {
        label: 'Third Tab',
        templateName: 'defaultTemplate',
      },
    ];
    this.cdr.detectChanges();
  }
}
