var gulp = require("gulp");
var sass = require("gulp-sass");
var csso = require("gulp-csso");

var browserSync = require("browser-sync").create();

function style() {
  return gulp
    .src("./src/scss/site.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(csso())
    .pipe(gulp.dest("./dist/res/css/"))
    .pipe(browserSync.stream());
}

function reload() {
  browserSync.reload();
}

function build() {
  style();
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch("dist/index.html", reload);
  gulp.watch("dist/res/js/site.js", reload);

  gulp.watch("src/scss/*.scss", style);
}

exports.default = watch;
exports.build = build;
