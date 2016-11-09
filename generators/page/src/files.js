'use strict';

var mkdirp = require('mkdirp');
var _ = require("lodash");
var utils = require("../../../utils.js");

module.exports = function (AngularATGenerator) {

    AngularATGenerator.prototype.copyCopmFiles = function copyFiles() {
      var data = {'pageName': this.props.pageName, 'pageNameCamel': _.camelCase(this.props.pageName), 'controllerName': _.upperFirst(_.camelCase(this.props.pageName)), 'pageModule': _.camelCase(this.props.pageModule), 'pageState': this.props.pageState, 'pageRoute': this.props.pageRoute};
      this.fs.copyTpl(
      this.templatePath('page.html'),
      this.destinationPath('src/app/pages/'+data.pageName+'/'+data.pageName+'.html'),
      data
    );
      this.fs.copyTpl(
      this.templatePath('page.scss'),
      this.destinationPath('src/app/pages/'+data.pageName+'/'+data.pageName+'.scss'),
      data
    );
      this.fs.copyTpl(
      this.templatePath('page.module.js'),
      this.destinationPath('src/app/pages/'+data.pageName+'/'+data.pageName+'.module'+'.js'),
      data
    );
      this.fs.copyTpl(
      this.templatePath('page.route.js'),
      this.destinationPath('src/app/pages/'+data.pageName+'/'+data.pageName+'.route'+'.js'),
      data
    );
      this.fs.copyTpl(
      this.templatePath('page.controller.js'),
      this.destinationPath('src/app/pages/'+data.pageName+'/'+data.pageName+'.controller'+'.js'),
      data
    );
    var indexModulesWriteLine = "require('./pages/"+data.pageName+"/"+data.pageName+".module').name";
    utils.addToFile("index.module.js",indexModulesWriteLine,utils.PAGE_MARKER,this.destinationRoot()+"/src/app");
    // var indexScssWriteLine = "@import '../../../app/components/"+this.props.componentName+"/"+this.props.componentName + ".scss';";
    // utils.addToFile("index.scss",indexScssWriteLine,utils.SCSS_MARKER,this.destinationRoot()+"/src/assets/styles/sass");
    };
};