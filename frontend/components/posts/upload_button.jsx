var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var History = require('react-router').History;

var UploadButton = React.createClass({
  mixins: [History],

  upload: function(e) {
    e.preventDefault();
    var that = this;
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error) {
        that.history.pushState(null, "posts/new", results[0])
      }
    });
  },

  render: function() {
    return(
      <div>
        <button className="navbar_buttons" onClick={this.upload}>Make a DaguerreoTyp</button>
      </div>
    );
  }
});

module.exports = UploadButton;
