var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rev = require("gulp-rev"),
    cssMinify = require("gulp-minify-css"),
    usemin = require('gulp-usemin'),
    sass = require('gulp-sass'),
    paths = {
        scripts: 'scripts/*.js',
        css: 'sass/*.scss'
    };

gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(gulp.dest('js/'));
});

gulp.task("css", function() {
    return gulp.src(paths.css)
        .pipe(sass())
        .pipe(cssMinify())
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ["scripts"]);
    gulp.watch(paths.css, ["css"]);
});
// The default task (called when you run `gulp` from cli)
gulp.task('default', ['build']);
