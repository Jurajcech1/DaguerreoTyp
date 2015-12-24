var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserStore = new Store(AppDispatcher);
var UserConstants =require('../constants/user_constants.js');

var _user = [];
var _users = []

var resetUser = function(user) {
  _user = [user];
};

var allUsers = function(users) {
  _users = users.slice();
};

UserStore.giveUser = function() {
  return _user[0];
};

UserStore.all = function() {
  return _users.slice();
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.USER_RECEIVED:
      resetUser(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.USERS_RECEIVED:
      allUsers(payload.users);
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
