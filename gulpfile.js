const gulp = require('gulp')
const { src, dest, watch, parallel, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create()
const uglify = require('gulp-uglify-es').default
const image = require('gulp-image')
const del = require('del')

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    })
}

function scripts() {
    return src('src/js/app.js')
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream())
}

function styles() {
  return src('src/scss/**/*.scss')
    .pipe(sass(({outputStyle: 'compressed'})).on('error', sass.logError))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())
}

function watching() {
    watch(['src/scss/**/*.scss'], styles)
    watch(['src/js/**/*.js', '!src/js/app.min.js'], scripts)
    watch(['src/*.html']).on('change', browserSync.reload)
}

function build() {
    return src([
        'src/css/app.min.css',
        'src/js/app.min.js',
        'src/*.html'
    ], {base: 'src'})
    .pipe(dest('dist'))
}

function images() {
    return src('src/img/**/*')
        .pipe(image({
                svgo: false,
            }))
        .pipe(dest('dist/img'))
}

function clean() {
    return del('dist')
}

exports.styles = styles
exports.watching = watching
exports.browsersync = browsersync
exports.scripts = scripts
exports.images = images
exports.clean = clean

exports.default = parallel(browsersync, watching)
exports.build = series(clean, images, build)