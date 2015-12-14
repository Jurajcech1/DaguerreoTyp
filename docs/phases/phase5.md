# Phase 5: Follows and Likes (1.5 days)

## Rails
### Models
* Follow
* Like

### Controllers
* FollowsController(index, create, destroy)
* LikesController(index, create, destroy)

### Views
* follows/index.json.jbuilder
* likes/index.json.jbuilder

## Flux
### Views (React Components)
* FollowButton
* LikeButton


### Stores
* Follow
* Like

### Actions
* ApiActions.receiveAllFollows -> triggered by ApiUtil
* ApiActions.deleteFollow
* FollowActions.fetchAllFollows -> triggers ApiUtil
* FollowActions.createFollow
* FollowActions.destroyFollow
* ApiActions.receiveAllLikes -> triggered by ApiUtil
* ApiActions.deleteLike
* PostActions.fetchAllLikes -> triggers ApiUtil
* PostActions.createLike
* PostActions.destroyLike

### ApiUtil
* ApiUtil.fetchAllFollows
* ApiUtil.createFollow
* ApiUtil.destroyFollow
* ApiUtil.fetchAllLikes
* ApiUtil.createLike
* ApiUtil.destroyLike

## Gems/Libraries
