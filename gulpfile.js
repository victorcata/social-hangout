const gulp = require("gulp"),
      pug = require("gulp-pug"),
      sass = require("gulp-sass"),
      sourcemaps = require("gulp-sourcemaps"),
      bulkSass = require('gulp-sass-bulk-import');

// SASS
gulp.task("sass", function() {
    return gulp.src("./app/styles/app.scss")
               .pipe(sourcemaps.init())
               .pipe(bulkSass())
               .pipe(sass().on("error", sass.logError))
               .pipe(sourcemaps.write())
               .pipe(gulp.dest("./dist"));
});

// SASS WATCH
gulp.task("sass:watch", function() {
    gulp.watch("./app/styles/**/*.scss", ["sass"]);
});

// PUG
gulp.task("pug", function() {
    return gulp.src("./app/views/index.pug")
               .pipe(pug())
               .pipe(gulp.dest("./dist"));
});

// DEFAULT
gulp.task("default", ["sass", "pug"]);