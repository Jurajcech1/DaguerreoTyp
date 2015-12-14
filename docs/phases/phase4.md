# Phase 4: Comments (2 days)

## Rails
### Models
* Comment

### Controllers
* CommentsController(index, create, destroy)

### Views
* comments/index.json.jbuilder

## Flux
### Views (React Components)
* CommentsIndex
  - CommentsIndexItem
* CommentForm

### Stores
* Comment

### Actions
* ApiActions.receiveAllComments -> triggered by ApiUtil
* ApiActions.deleteComment
* CommentActions.fetchAllComments -> triggers ApiUtil
* CommentActions.createComment
* CommentActions.destroyComment

### ApiUtil
* ApiUtil.fetchAllComments
* ApiUtil.createComment
* ApiUtil.destroyComment

## Gems/Libraries
