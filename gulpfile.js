/*global require*/
(function (r) {
    "use strict";
    var scss = r("gulp-scss");
    var gulp = r("gulp");
    gulp.task("scss", function () {
        gulp.src(
            "scss/**/*.scss"
        ).pipe(scss())
       .pipe(gulp.dest("css"));
    });
}(require));