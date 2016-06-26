/**
 * Order.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },

    age: {
      type: 'integer',
      required: true
    },

    gender: {
      type: 'integer',
      required: true
    },

    weight: {
      type: 'float',
      required: true
    },

    date: {
      type: 'date',
      required: true
    },

    chp: {
      type: 'json'
    }
  }
};

