import { Component, OnInit } from '@angular/core';
import { StatService } from '../../services/stat.service';
import { StatChange } from '../../models/stat-change';

@Component({
  selector: 'gtc-personal-stats',
  templateUrl: './personal-stats.component.html',
  styleUrls: ['./personal-stats.component.scss']
})
export class PersonalStatsComponent implements OnInit {
  statChanges: StatChange[] = [];

  constructor(private statService: StatService) { 
    
  }

  ngOnInit() {
    let randomUser = 'User ' + Math.floor((Math.random() * 40) + 1);
    this.statService.getUserStats(randomUser).subscribe((result) => {
      let sorted = result.sort((a,b) => {
        if (a.statGroup == b.statGroup) {
          return (new Date(a.evalDate) < new Date(b.evalDate)) ? -1 : (new Date(a.evalDate) > new Date(b.evalDate)) ? 1 : 0;
        } else {
          return a.statGroup < b.statGroup ? -1 : a.statGroup > b.statGroup ? 1 : 0;
        }
      });
      let currentGroup = sorted[0].statGroup;
      let currentChange: StatChange;
      let currTot = 0;
      let currCount = 0;
      let last = 0;
      for (let i = 0; i < sorted.length; i++) {
        if (sorted[i].statGroup != currentGroup) {
          currentChange = new StatChange(currentGroup, currTot/currCount, last);
          this.statChanges.push(currentChange);
          currentGroup = sorted[i].statGroup;
          currTot = 0;
          currCount = 0;
          last = 0;
        } else {
          currTot += sorted[i].percent;
          currCount++;
          last = sorted[i].percent;
        }
      }
    });
  }

}
