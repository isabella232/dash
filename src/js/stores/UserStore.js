var _ = require('lodash');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var User = Backbone.Model.extend({})

var UserStore = Backbone.Collection.extend({
  model: User,
  url: '/kratos/users',
  initialize: function(attrs, opts) {
    AppDispatcher.register(_.bind(this.handleAction));
    this.fetch();
  },
  actions: {

  },
  handleAction: function(action) {
    var actionHandler = this.actions[action.actionType];
    if (actionHandler) {
      return actionHandler.call(this, action);
    }
  }
})

userStore = new UserStore();
module.exports = userStore;