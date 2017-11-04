import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FeedItem } from '../../../models/feed';


@Component({
  selector: 'gtc-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  @Output() onAddPost: EventEmitter<any> = new EventEmitter();
  label: string;

  constructor() { }

  ngOnInit() {
  }

  onAddPostClick() {
    this.onAddPost.emit(new FeedItem(this.label));
  }

}
