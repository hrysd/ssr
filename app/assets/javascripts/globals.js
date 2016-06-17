const global = require('global');

global.React    = require('react');
global.ReactDOM = require('react-dom');

const App = global.App = window.App = {};

module.exports = App;
