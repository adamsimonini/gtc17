import { Component, OnInit, Input } from '@angular/core';
import { StatData } from './stat-data';

@Component({
  selector: 'gtc-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  @Input() statData: StatData = new StatData("Test", 0, 100, 50, 60);
  baseWidth: number;
  changeWidth: number;
  isImprovement: boolean;

  constructor() { }

  ngOnInit() {
    this.baseWidth = Math.floor(this.statData.getBeforePercent());
    this.changeWidth = Math.floor(this.statData.getChange());
    this.isImprovement = this.changeWidth >= 0;
    console.log(this.baseWidth);
    console.log(this.changeWidth);
  }

}
