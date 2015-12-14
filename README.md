# DaguerreoTyp

[Heroku link][heroku] **NB:** Will put link here

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

DaguerreoTyp is a web application inspired by Instagram built using Ruby on
Rails and React.js. DaguerreoTyp allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create and delete posts in the form of uploaded images
- [ ] Write captions on their posts
- [ ] Tag posts with multiple tags and search posts by tag
- [ ] Write comments on their own and other's posts
- [ ] Like other's posts
- [ ] Follow other users

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Post Model and JSON API (1 day)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). Upon signing up or signing in, the user will be taken to their profile.
I will set up a full JSON API for Posts such that I will be able to immediately
start seeing Post information.

[Details][phase-one]

### Phase 2: Flux Architecture and Post CRUD (2.5 days)

I will set up Flux, the React Router, and the React view structure for the Post
pages. I will then set up a store for Posts and create the necessary actions to
implement the CRUD for Posts. Once this is done, I will create React
views for the Posts `Index`, `IndexItem` and `Form`. At the end of Phase 2,
Posts can be created and viewed in the browser. I will start doing css for
styling the Posts.

[Details][phase-two]

### Phase 3: Users and Tags (2 days)

As Posts belong to Users, I will make a User page which will contain the index
of Posts created by that user and create JSON API for the User page. I will
enable Posts to be tagged with multiple tags. Users can search for tags or other
Users in a search bar at the top of the User page.

[Details][phase-three]

### Phase 4: Comments (2 days)

I will implement a Comment model and controller with JSON API for Users to be
able to create comments about Posts. Then, I will create a Comment store and
integrate comments into my Flux loop such that all comments related to a Post
will be shown on that Post's show page along with an input to create new
Comments.

[Details][phase-four]

### Phase 5: Follows and Likes (1.5 days)

I will implement Users being able to follow each other.  I will create a Follow
button which will enable a user to follow or unfollow another user.  I will also
make a Like button on Posts such that users can like or un-like Posts.

[Details][phase-five]

### Phase 6: Styling (1.5 days)

Some CSS styling will be performed at each phase of the project, however, in
this phase the bulk of the Styling and prettifying will occur.

### Bonus Features (TBD)
- [ ] Apply filters to post images

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
