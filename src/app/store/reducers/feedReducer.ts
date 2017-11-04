import { IFeedItem, FeedItem } from '../../models/feed';
import { IUser, User } from '../../models/user';

const defaultState = [
  new FeedItem(
    new User('Bob'),
    'I had a call today with a boy who was sad',
    'How it went',
    'What was the problem',
    'Jan 12'
  ),
  new FeedItem(
    new User('John'),
    'I had a call today with a boy who was sad',
    'How it went',
    'What was the problem',
    'Jan 12'
  ),
  new FeedItem(
    new User('Steve'),
    'I had a call today with a boy who was sad',
    'How it went',
    'What was the problem',
    'Jan 12'
  ),
  new FeedItem(
    new User('Micheal'),
    'I had a call today with a boy who was sad',
    'How it went',
    'What was the problem',
    'Jan 12'
  ),
];

export function feedReducer(state: IFeedItem[] = defaultState, action) {
  switch (action.type) {
    case 'ADD_FEED_ITEM':
      return [
        action.payload,
        ...state,
      ];
    default:
      return state;
  }
}