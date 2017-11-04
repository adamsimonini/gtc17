import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gtc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  feedList: any[] = [
    {
      label: 'Feed Item 1'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
