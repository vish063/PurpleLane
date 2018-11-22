// Include gulp
var gulp = require('gulp');
var sourceMap = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var spawn = require('child_process').spawn;
// Include Our Plugins
var less = require('gulp-less');


// Compile Our less
gulp.task('less', function() {
    return gulp.src([
        'components/**/*.less',
        'shared/styles/variables.less',
        'shared/styles/mixins.less',
        'shared/styles/buttons.less',
        'shared/styles/forms.less',
        'shared/styles/styles.less',
        'shared/*.less',
        'shared/**/*.less',
        'shared/**/**/*.less'
    ])
        .pipe(sourceMap.init())
        .pipe(concat('styles.less'))
        .pipe(less())
        .pipe(sourceMap.write())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist/css'));
});




/*
// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['app/!**!/!*.js','app/!**!/!*.html']);
    gulp.watch(['app/!**!/!*.less', 'less/!**!/!*.less'], ['less']);
    console.log('Watching files under app/!*');
});*/

//Start server
gulp.task('start', ['less'], function(){
    var ps = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'start'], {
    });
    ps.stderr.on('data',function(data){
        console.log(data); // `${}` ES6 template literals
    });

  //  gulp.start('watch');
});



// Default Task
gulp.task('default', ['start']);
