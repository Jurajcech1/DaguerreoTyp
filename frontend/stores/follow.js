var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var FollowStore = new Store(AppDispatcher);

var _followees = [];

var resetFollowees = function(followees) {
  _followees = followees.slice();
};

FollowStore.all = function() {
  return _followees.slice();
};

FollowStore.find = function(id) {
  var theFollowee = "";
  _followees.forEach(function(followee) {
    if (followee.id === id) {
      theFollowee = followee;
    }
  });
  return theFollowee;
};

FollowStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case FollowConstants.FOLLOWEES_RECEIVED:
      resetFollowees(payload.followees);
      FollowStore.__emitChange();
      break;
    default:

  }
}


module.exports = FollowStore;
