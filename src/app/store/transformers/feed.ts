import { User } from '../../models/user';
import { FeedItem } from '../../models/feed';
import * as moment from 'moment';

const feedCollection = [
  new FeedItem(
    new User(),
    'I had a call today with a boy who was sad',
    'How it went',
    'What was the problem',
    moment(new Date('10/2/2017')).format('ll')
  ),
  new FeedItem(
    new User(),
    'I had a call today with a boy who was sad',
    'How it went',
    'What was the problem',
    moment(new Date('9/29/2017')).format('ll')
  ),
  new FeedItem(
    new User(),
    'I had a call today with a boy who was sad',
    'How it went',
    'What was the problem',
    moment(new Date('9/25/2017')).format('ll')
  ),
  new FeedItem(
    new User(),
    'I had a call today with a boy who was sad',
    'How it went',
    'What was the problem',
    moment(new Date('9/21/2017')).format('ll')
  ),
];

export class FeedTransformer {
  static transform(userList: User[]) {
    return feedCollection.map((item, index) => {
      item.user = userList[index];
      item.likes = [
        userList[index]
      ];
      item.comments = [
        userList[index]
      ];
      return item;
    });
  }

  static createFullName(first = '', last = '') {
    return first + last;
  }
}