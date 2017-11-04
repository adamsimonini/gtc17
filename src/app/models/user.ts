import { Gender } from './gender';

export interface IUser {
  gender: Gender,
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
  gender: Gender;
  name: {
    title: string,
    first: string,
    last: string,
    full: string
  };
  icon: string;
  thumbnail: string;

  constructor(gender = null, title = null, first = null, last = null, full = null, large = null, thumbnail = null) {
    this.gender = gender;
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