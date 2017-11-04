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
  categories = [
     {value: 1, category: "Emotional Health"},
     {value: 2, category: "Dating"},
     {value: 3, category: "LGBTQ"},
     {value: 4, category: "Sexting"},
     {value: 5, category: "Bullying"},
     {value: 6, category: "Assult"},
     {value: 7, category: "Family Troubles"},
     {value: 8, category: "Other"}
   ];

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
