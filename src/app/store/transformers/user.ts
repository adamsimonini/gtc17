import { User } from '../../models/user';

export class UserTransformer {
  static transform(apiData) {
    const stringData = apiData._body;
    const jsonData = JSON.parse(stringData);
    const userData = jsonData.results[0];



    // Format new user
    return new User(
      userData.name.first,
      userData.name.last,
      this.createFullName(userData.name.first, userData.name.last),
      userData.name.title,
      userData.picture.large,
      userData.picture.thumbnail,
    );
  }

  static createFullName(first = '', last = '') {
    return first + last;
  }
}