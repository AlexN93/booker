/**
 * ItemAvailability.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    dates: {
      type: 'json',
      required: true
    },

    item_id: {
      model: 'item',
      required: true
    }

  }
};

