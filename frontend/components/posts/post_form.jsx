var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;

var PostForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function(){
   return {
     caption: ""
   };
 },

  _post: function() {
    return this.props.location.query;
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var post = this._post()
    ApiUtil.createNewPost(post, this.state.caption);
    this.redirectToIndex();
  },

  redirectToIndex: function() {
    this.history.pushState(null, "/")
  },

  render: function() {
    return(
      <div>
        <h2>Add a Caption!</h2>
        <div>
          <img src={this._post().url} />
          <form onSubmit={this.handleSubmit}>
            <input type="text" valueLink={this.linkState('caption')}/>
            <input type="submit" value="Create DaguerreoTyp!" />
          </form>
        </div>
      </div>
    );
  }
});
module.exports = PostForm;
