'use strict';

import * as componentDirective from './component.component';
import './component.scss';

const componentModule = angular.module('component-module', []);

componentModule
  .directive('componentTest', componentDirective);

export default componentModule;
