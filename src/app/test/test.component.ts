import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  numbers: Array<number> = [1, 2, 3, 4];

  constructor() {}

  ngOnInit(): void {}
}
