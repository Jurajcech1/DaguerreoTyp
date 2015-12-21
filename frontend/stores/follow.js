var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var FollowStore = new Store(AppDispatcher);
var FollowConstants = require('../constants/follow_constants.js');

var _followees = [];

var resetFollowees = function(followees) {
  _followees = followees.slice();
};

var addFollowee = function(followee) {
  _followees.push(followee);
};

var deleteFollowee = function(followee) {
  followees = _followees.slice();
  followees.forEach(function(flw, index) {
    if (flw.id === followee.id) {
      _followees.splice(index, 1);
    }
  });
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
    case FollowConstants.FOLLOWEE_RECEIVED:
      addFollowee(payload.followee);
      FollowStore.__emitChange();
      break;
    case FollowConstants.DELETE_FOLLOWEE:
      deleteFollowee(payload.followee);
      FollowStore.__emitChange();
      break;
  }
};

module.exports = FollowStore;
