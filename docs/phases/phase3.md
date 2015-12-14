# Phase 3: Users and Tags (2 days)

## Rails
### Models
* Tag
* Tagging

### Controllers
* Api::TagController (create, index)
* UsersController (show)

### Views
* user/show.json.jbuilder
* tags/index.json.jbuilder

## Flux
### Views (React Components)
* UserShow
* TagIndex
  - TagIndexItem
* SearchIndex

### Stores

### Actions
* ApiActions.receiveAllTags -> triggered by ApiUtil
* ApiActions.receiveSingleUser
* TagActions.fetchAllTags -> triggers ApiUtil
* TagActions.fetchSingleUser
* TagActions.createTag

### ApiUtil
* ApiUtil.fetchAllTags
* ApiUtil.fetchSingleUser
* ApiUtil.createTag

## Gems/Libraries
