import { Component, Output, EventEmitter } from '@angular/core';
import { FeedItem } from '../../../models/feed';
import { IUser, User } from '../../../models/user';
import { Store } from '@ngrx/store';

@Component({
  selector: 'gtc-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {
  @Output() onAddPost: EventEmitter<any> = new EventEmitter();
  user: IUser;
  whatHappened: string;
  howItWent: string;
  whatWasTheProblem: string;

  constructor(private store: Store<any>) {
    this.store.select('user').subscribe(data => {
      this.user = data;
    });
  }

  onAddPostClick() {
    this.onAddPost.emit(new FeedItem(
      this.user,
      this.whatHappened,
      this.howItWent,
      this.whatWasTheProblem
    ));
  }

}
