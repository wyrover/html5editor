// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/html2canvas/build/html2canvas.js',
      'bower_components/canvas2image/canvas2image/canvas2image.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/hammerjs/hammer.js',
      'bower_components/angular-hammerjs/angular.hammer.js',
      'bower_components/angular-fx/dist/angular-fx.min.js',
      'bower_components/angular-busy/dist/angular-busy.js',
      'bower_components/angular-hotkeys/build/hotkeys.js',
      'bower_components/qrcode-generator/js/qrcode.js',
      'bower_components/angular-qrcode/angular-qrcode.js',
      'bower_components/angular-load/angular-load.js',
      'bower_components/angular-async-loader/dist/angular-async-loader.js',
      'bower_components/ng-file-upload/ng-file-upload.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'client/app/app.js',
      //'client/app/app.coffee',
      'client/app/**/*.js',
      //'client/app/**/*.coffee',
      'client/components/**/*.js',
      //'client/components/**/*.coffee',
      //'client/app/**/*.jade',
      //'client/components/**/*.jade',
      'client/app/**/*.html',
      'client/components/**/*.html'
    ],

    preprocessors: {
      '**/*.jade': 'ng-jade2js',
      '**/*.html': 'html2js',
      '**/*.coffee': 'coffee',
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    ngJade2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
