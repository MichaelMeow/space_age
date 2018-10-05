import './scss/styles.scss';
import { Age } from './js/age.js';
import $ from 'jquery';




$(document).ready(function(){
  let michaelsAge = new Age(32);
  michaelsAge.output();
});
