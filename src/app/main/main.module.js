import mainComponent from './main.component';
require('./');

export default angular
  .module('mainModule', [])
  .component('mainComponent', mainComponent()).name;