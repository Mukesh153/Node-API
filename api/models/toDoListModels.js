'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
 
  ID: {
    type: String,
     //default: Date.now
  },
 
  Description: {
    type: String,
    required: 'Kindly enter the name of the task'
  }
  // ,
  // status: {
  //   type: [{
  //     type: String,
  //     enum: ['pending', 'ongoing', 'completed']
  //   }],
  //   default: ['pending']
  // }
});
module.exports = mongoose.model('TO-DO', TaskSchema);
