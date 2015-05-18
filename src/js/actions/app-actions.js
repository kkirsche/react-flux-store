var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var AppActions = {
  addItem: function (item) {
    AppDispatcher.handleAction({
      actionType: AppConstants.ADD_ITEM,
      item: item
    })
  },
  removeItem: function (index) {
    AppDispatcher.handleAction({
      actionType: AppConstants.REMOVE_ITEM,
      index: index
    })
  },
  decreaseItem: function (index) {
    AppDispatcher.handleAction({
      actionType: AppConstants.DECREASE_ITEM,
      index: index
    })
  },
  increaseItem: function (index) {
    AppDispatcher.handleAction({
      actionType: AppConstants.INCREASE_ITEM,
      index: index
    })
  },
};

module.exports = AppActions;
