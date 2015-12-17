var React = require('react');
var ApiUtil = require('../../util/api_util.js');

var UploadButton = React.createClass({
  upload: function(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error) {
        ApiUtil.createNewPost(results[0]);
      }
    });
  },


});

module.exports = UploadButton;
