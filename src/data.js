const users = [];

const getUsers = () => users;

const addUser = (user) => {
  users.push(user);
};

const findUser = (name) => {
  let result = false;
  users.forEach((val) => {
    if (val.name === name) {
      result = true;
    }
  });
  return result;
};

const updateUser = (user) => {
  users.forEach((val, index) => {
    if (val.name === user.name) {
      users[index].age = user.age;
    }
  });
};

module.exports.getUsers = getUsers;
module.exports.addUser = addUser;
module.exports.findUser = findUser;
module.exports.updateUser = updateUser;
