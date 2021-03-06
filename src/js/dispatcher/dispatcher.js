var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the server.
   */
AppDispatcher.handleAction = function (action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  })
}

module.exports = AppDispatcher;
