import { Component, OnInit } from '@angular/core';

class routingLinks{
  sectionName: String | undefined;
  sectionIcon: String | undefined;
  path: String | undefined;
  sectionIdentifier: string | undefined;
}

@Component({
  selector: 'app-app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css']
})
export class AppSidebarComponent implements OnInit {
  Sections: routingLinks[] = [
    {sectionName : 'About me', sectionIcon: 'person', path : '', sectionIdentifier : ''}, 
    {sectionName : 'Education', sectionIcon: 'library_books', path : '/portfolio', sectionIdentifier : 'education'}, 
    {sectionName : 'Experience', sectionIcon: 'access_time', path : '#', sectionIdentifier : ''}, 
    {sectionName : 'Technologies', sectionIcon: 'computer', path : '#', sectionIdentifier : ''}, 
    {sectionName : 'Frameworks', sectionIcon: 'build', path : '#', sectionIdentifier : ''},
    {sectionName : 'Contact', sectionIcon: 'contact_support', path : '#', sectionIdentifier : ''}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
