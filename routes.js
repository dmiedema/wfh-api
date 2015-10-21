'use strict';
var employee = require('./controllers/employee');

module.exports = [
  
  {
    path:'/',
    method:'GET',
    handler: function(request, reply){
      reply('OK')
    },
  },

  {
    path: '/workers',
    method: 'GET',
    handler: employee.getAll
  },

  {
    path: '/workers',
    method: 'POST',
    handler: employee.addNew
  },
  
  {
    path: '/workers',
    method: 'PUT',
    handler: employee.updateStatus
  }
  
];