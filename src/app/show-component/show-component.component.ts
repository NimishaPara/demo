import { Component, OnInit } from '@angular/core';
import { data } from '../data/data';

@Component({
  selector: 'app-show-component',
  templateUrl: './show-component.component.html',
  styleUrls: ['./show-component.component.scss'],
})
export class ShowComponentComponent implements OnInit {
  data: Array<any> = data;

  constructor() {}

  ngOnInit(): void {}
}
