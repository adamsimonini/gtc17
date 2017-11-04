import { IFeedItem, FeedItem } from '../../models/feed';

const defaultState = [
  new FeedItem('FeedItem1'),
  new FeedItem('FeedItem2'),
  new FeedItem('FeedItem3'),
  new FeedItem('FeedItem4'),
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