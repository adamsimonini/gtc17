

export interface IFeedItem {
  label: string;
}

export class FeedItem implements IFeedItem {
  label: string;
  constructor(label: string) {
    this.label = label;
  }
}