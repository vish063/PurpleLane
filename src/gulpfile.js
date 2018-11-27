// Include gulp
var gulp = require('gulp');
var sourceMap = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var spawn = require('child_process').spawn;
// Include Our Plugins
var less = require('gulp-less');
var browserSync = require('browser-sync').create();


// Compile Our less
gulp.task('less', function() {
    return gulp.src([
        'components/**/*.less',
        'shared/styles/variables.less',
        'shared/styles/mixins.less',
        'shared/styles/buttons.less',
        'shared/styles/forms.less',
        'shared/*.less',
        'shared/*/*.less'
    ])
        .pipe(sourceMap.init())
        .pipe(concat('styles.less'))
        .pipe(less())
        .pipe(sourceMap.write())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

/* This placeholder for future additions*/
gulp.task('scripts', function() {
    return gulp.src(['components/**/*.js']) ///*'app.js', 'config.js',*/
        .pipe(sourceMap.init())
        .pipe(concat('all.js'))
        .pipe(sourceMap.write())
        .pipe(concat('all.js'))
       // .pipe(rename('all.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});


// Watch Files For Changes
gulp.task('watch', ['browserSync', 'less', 'scripts'], function() {
    gulp.watch(['components/**/*.js','components/**/*.html','shared/**/*.js','shared/**/*.html'],['scripts']);
    gulp.watch(['components/**/*.less',
        'shared/styles/variables.less',
        'shared/styles/mixins.less',
        'shared/styles/buttons.less',
        'shared/styles/forms.less',
        'shared/*.less',
        'shared/*/*.less'], ['less']);
    console.log('Watching files under app/!*');
});

//Start server
gulp.task('start', ['less'], function(){
    var ps = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'start'], {
    });
/*
    ps.stderr.on('data',function(data){
        console.log(data); // `${}` ES6 template literals
    });
*/

  //  gulp.start('watch');
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
});

// Default Task
gulp.task('default', ['start']);
