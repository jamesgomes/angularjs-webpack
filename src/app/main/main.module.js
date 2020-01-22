import mainComponent from './main.component';
require('./main.component.scss');

export default angular
  .module('mainModule', [])
  .component('mainComponent', mainComponent()).name;