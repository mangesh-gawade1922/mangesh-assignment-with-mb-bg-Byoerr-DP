const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');
const bs = browserSync.create();

// File paths
const paths = {
  scss: 'src/scss/**/*.scss',
  js: 'src/js/**/*.js',
  html: './*.html'
};

// Compile SCSS → Minify → Autoprefix
function cssTask() {
  return src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(dest('dist/css'))
    .pipe(bs.stream());
}

// Concatenate and minify JS
function jsTask() {
  return src(paths.js)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest('dist/js'))
    .pipe(bs.stream());
}

// BrowserSync Server
function browserSyncServe(cb) {
  bs.init({
    server: {
      baseDir: './'
    },
    port: 3000
  });
  cb();
}

// Watch changes
function watchTask() {
  watch(paths.scss, cssTask);
  watch(paths.js, jsTask);
  watch(paths.html).on('change', bs.reload);
}

// Public tasks
exports.css = cssTask;
exports.js = jsTask;
exports.browserSync = browserSyncServe;
exports.build = series(cssTask, jsTask, browserSyncServe);
exports.default = series(cssTask, jsTask, watchTask);