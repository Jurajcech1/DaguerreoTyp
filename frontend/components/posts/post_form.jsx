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
    this.history.pushState(null, "users/" + window.current_userid);
  },

  render: function() {
    return(
      <div className="post_form clearfix">
        <img className="post_form_image" src={this._post().url} />
        <br/>
        <form  onSubmit={this.handleSubmit}>
          <textarea className="post_form_header" type="text" placeholder="Add a Caption!" valueLink={this.linkState('caption')}></textarea>
          <br/>
          <input className="post_form_caption" type="submit" value="Create DaguerreoTyp!" />
        </form>
      </div>
    );
  }
});
module.exports = PostForm;
