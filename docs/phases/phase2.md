# Phase 2: Flux Architecture and Post CRUD (2.5 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* PostsIndex
  - PostsIndexItem
* PostShow
* PostForm
* Navbar
* Footer

### Stores
* Post

### Actions
* ApiActions.receiveAllPosts -> triggered by ApiUtil
* ApiActions.receiveSinglePost
* ApiActions.deletePost
* PostActions.fetchAllPosts -> triggers ApiUtil
* PostActions.fetchSinglePost
* PostActions.createPost
* PostActions.destroyPost

### ApiUtil
* ApiUtil.fetchAllPosts
* ApiUtil.fetchSinglePost
* ApiUtil.createPost
* ApiUtil.destroyPost

## Gems/Libraries
* Flux Dispatcher (npm)
