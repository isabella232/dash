var React = require('react');
var common = require('../utils/common');
var UserStore = require('../stores/UserStore');
var Icon = require('./Icon.jsx');
var Button = require('./Button.jsx');
var $ = require('jquery');

var CurrentUserInfo = React.createClass({

  render: function() {
    var userInfo;
    if (this.props.loggedIn) {
      userInfo = (
        <span className="masthead_user user-meta">
          <span className="user-meta_item user-meta_item__first">
            <span className="user-meta_name">
              <Icon type="user" />
              {this.props.username}
            </span>
            <div>
              <span className="user-role">
                {this.props.roles}
              </span>
            </div>
          </span>
          <span className="user-meta_item user-meta_item__last">
            <Button href="/logout" label="Log out" type={['link', 'warning']} />
          </span>
        </span>
      );
    } else {
      userInfo = <Button href='/login' label='Log into DevDash' />
    }
    return (
      <div className='current-user'>
        {userInfo}
      </div>
    )
  }
});

module.exports = CurrentUserInfo;