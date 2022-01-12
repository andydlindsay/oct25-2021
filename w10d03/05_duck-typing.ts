interface IUser {
  username: string;
  password: string;
}

const verifyUser = (user: IUser): boolean => {
  // user.fanClub
  return true;
};

const myUser = {
  username: 'jstamos',
  password: '1234',
  fanClub: []
};

verifyUser(myUser);
