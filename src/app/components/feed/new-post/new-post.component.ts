import { Component, Output, EventEmitter } from '@angular/core';
import { FeedItem } from '../../../models/feed';
import { User } from '../../../models/user';


@Component({
  selector: 'gtc-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {
  @Output() onAddPost: EventEmitter<any> = new EventEmitter();
  whatHappened: string;
  howItWent: string;
  whatWasTheProblem: string;

  constructor() { }

  onAddPostClick() {
    this.onAddPost.emit(new FeedItem(
      new User(),
      this.whatHappened,
      this.howItWent,
      this.whatWasTheProblem
    ));
  }

}
