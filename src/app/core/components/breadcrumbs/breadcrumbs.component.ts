import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  crumbs = [
    {
      link: '#',
      title: 'home',
    },
    {
      link: '#',
      title: 'shop',
    },
    {
      link: '#',
      title: 'asgaard sofa',
    },
  ];
}
