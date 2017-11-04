import { IUser } from './user';

export type problemType = 'family' | 'bulling' | '';
export type howItWent = 'good' | 'bad';

export interface IFeedItem {
  user: IUser,
  whatHappened: string,
  howItWent: string,
  whatWasTheProblem: problemType | string
  date: string,
}

export class FeedItem implements IFeedItem {
  user: IUser;
  whatHappened: string;
  howItWent: string;
  whatWasTheProblem: string;
  date: string;

  constructor(user = null, whatHappened = null, howItWent = null, whatWasTheProblem = null, date = null) {
    this.user = user;
    this.howItWent = howItWent;
    this.whatWasTheProblem = whatWasTheProblem;
    this.whatHappened = whatHappened;
  }
}