import { Gender } from './gender';

export interface IUser {
  name: {
    title: string,
    first: string,
    last: string,
    full: string
  },
  icon: string,
  thumbnail: string
}

export class User implements IUser {
  name: {
    title: string,
    first: string,
    last: string,
    full: string
  };
  icon: string;
  thumbnail: string;

  constructor(first = null, last = null, full = null, title = null, large = null, thumbnail = null) {
    this.name = {
      title,
      first,
      last,
      full
    };
    this.icon = large;
    this.thumbnail = thumbnail;
  }
}