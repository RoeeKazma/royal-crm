import { Component, OnInit } from '@angular/core';

interface NavItem {
  title: string;
  icon?: string;
  link: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  navItems: NavItem[] = [
    { title: 'customers', icon: 'bi bi-briefcase-fill', link: 'customers' },
    { title: 'contacts', icon: 'bi bi-journal', link: 'contacts' },
    { title: 'leads', icon: 'bi bi-person-bounding-box', link: 'leads' },
    { title: 'reports', icon: 'bi bi-file-earmark-bar-graph', link: 'reports' },
    { title: 'integrations', icon: 'bi bi-layers-fill', link: 'integrations' },
    {
      title: 'year-end sale',
      icon: 'bi bi-emoji-sunglasses-fill',
      link: 'year-end-sale',
    },
    // {
    //   title: 'HTTP Test',
    //   icon: 'bi bi-emoji-sunglasses-fill',
    //   link: 'tut/http',
    // },
    // {
    //   title: 'Forms Test',
    //   icon: 'bi bi-emoji-sunglasses-fill',
    //   link: 'tut/forms',
    // },
  ];
  defaultIcon: string = 'bi bi-person';
  constructor() {}

  ngOnInit(): void {}
}
