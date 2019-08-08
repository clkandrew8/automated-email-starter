const gulp = require('gulp');
const sass = require('gulp-sass');
const inlineCss = require('gulp-inline-css');
const pug = require('gulp-pug');
//const replace = require('gulp-replace');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();


// Compile SASS to CSS
function compileSass() {
    return gulp
        .src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        
}

// Compile PUG into HTML
function compilePug(){
    return gulp
        .src('./pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./email/'))
        
}

// Inline the CSS into HTML
function inlineCSS() {
    return gulp
        .src('./email/*.html')
        .pipe(inlineCss({
            appleStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: false,
            removeLinkTags: false
        }))
        .pipe(gulp.dest('./email'))
        .pipe(browserSync.stream())
        
}

// Minify HTML - DO THIS LAST/FOR BUILD
function minifyHTML(){
    return gulp 
        .src('./email/*.html')
        .pipe(htmlmin(
            { 
                collapseWhitespace: true,
                minifyCSS: true,
        }))
        .pipe(rename("./index.html"))
        .pipe(gulp.dest('./email'))
}

// Watcher
function watchBuild(){
    browserSync.init({
        server: {
            baseDir: "./email"
        }
    })
    return gulp.watch(
        [
            "./scss/*.scss",
            "./pug/*.pug",
            "./pug-includes/*.pug",
            
        ],
        gulp.series(compileSass, compilePug, inlineCSS),
    );
}

exports.compileSass = compileSass;
exports.compilePug = compilePug;
exports.inlineCSS = inlineCSS;
exports.minifyHTML = minifyHTML;
exports.build = gulp.series(compileSass, compilePug, inlineCSS, watchBuild);
exports.watch = watchBuild;