var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('less', function() {
    return gulp.src('client/app/app.less', {
        base: 'client'
    })
    .pipe($.less())
    .pipe(gulp.dest('client'))
});

gulp.task('bower', function() {
    return gulp.src(['client/index.html', 'client/app/app.less'], {
        base: 'client'
    })
    .pipe($.inject($.bowerFiles(), {
        relative: true,
        name: 'bower'
    }))
    .pipe(gulp.dest('client'));
});

gulp.task('inject', ['bower'], function() {
    var scripts = gulp.src(['client/components/**/*', 
    'client/app/**/*', 
    '!client/app/app.js', 
    '!client/app/app.less', 
    '!client/**/*.spec.js'], {
        read: false
    });
    return gulp.src(['client/index.html', 'client/app/app.less'], {
        base: 'client'
    })
    .pipe($.inject(scripts, {
        relative: true,
    }))
    .pipe(gulp.dest('client'));
});

gulp.task('imagemin', ['clean'], function() {
    return gulp.src('client/assets/**/*', {
        base: '.'
    })
    .pipe($.imagemin())
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', ['clean'], function() {
    return gulp.src(['server/**/*', 
    'client/components/**/*.html', 
    'client/app/**/*.html', 
    'client/fonts/*', 
    'client/vendor/**/*',
    'package.json'], 
    {
        base: '.'
    })
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
    return gulp.src('dist', {
        read: false
    })
    .pipe($.clean({
        force: true
    }));
});

gulp.task('usemin', ['clean', 'inject'], function() {
    return gulp.src('client/*.html')
    .pipe($.usemin({
        vendorcss: [$.autoprefixer(), $.minifyCss()],
        appcss: [$.minifyCss()],
        html: [$.minifyHtml({
            empty: true,
            quotes: true
        })],
        vendorjs: [$.uglify()],
        appjs: [$.ngAnnotate(), $.uglify()],
        //inlinejs: [$.uglify()],
        //inlinecss: [$.minifyCss(), 'concat']
    }))
    .pipe(gulp.dest('dist/client'));
});

gulp.task('rev', function(){
    return gulp.src('dist/client/index.html')
        .pipe($.revEasy())
        .pipe(gulp.dest('dist/client'));
});

gulp.task('build', ['clean', 'bower', 'inject', 'less', 'usemin', 'imagemin', 'copy','rev']);

gulp.task('serve', ['bower', 'inject', 'less'], function() {
    var server = $.liveServer('./server',undefined, 12345);
    server.start();
    
    gulp.watch(['client/**/*.js', 
    'client/**/*.html', 'assets/**/*', 
    'client/**/*.css'], function(file) {
        server.notify.apply(server, [file]);
    });
    
    gulp.watch(['client/**/*.less'], ['less']);
    
    gulp.watch(['server/**/*'], function(file) {
        server.start.bind(server)();
    })
});

gulp.task('server', ['build'], function() {
    var server = $.liveServer('./dist/server',undefined, false);
    server.start();
});

gulp.task('default', ['serve']);
