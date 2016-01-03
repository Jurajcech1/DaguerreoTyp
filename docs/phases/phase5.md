# Phase 5: Follows and Likes (1.5 days)

## Rails
### Models
* Follow

### Controllers
* FollowsController(index, create, destroy)

### Views
* follows/index.json.jbuilder

## Flux
### Views (React Components)
* FollowButton


### Stores
* Follow

### Actions
* ApiActions.receiveAllFollows -> triggered by ApiUtil
* ApiActions.deleteFollow
* FollowActions.fetchAllFollows -> triggers ApiUtil
* FollowActions.createFollow
* FollowActions.destroyFollow

### ApiUtil
* ApiUtil.fetchAllFollows
* ApiUtil.createFollow
* ApiUtil.destroyFollow

## Gems/Libraries
