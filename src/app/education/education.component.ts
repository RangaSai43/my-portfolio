import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Education {
  name: string;
  college: string;
  year: number;
  percentage: number;
}

const education: Education[] = [
  { name: 'B.Tech',college: "GITAM University", year: 2020, percentage: 89.5},
  { name: '10th Standard',college: "Sri Chaitanya School", year: 2014, percentage: 95},
  { name: 'Intermediate',college: "Sri Chaitanya College", year: 2016, percentage: 92},
];

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit,AfterViewInit {

  displayedColumns: string[] = ['name', 'college', 'year', 'percentage'];
  dataSource = new MatTableDataSource(education);

  constructor(
  ) { }

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;

  }

  ngOnInit(): void {
  }

}
