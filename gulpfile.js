const gulp = require("gulp"),
sass = require("gulp-sass"),
browserSync = require("browser-sync").create();



gulp.task("serve", ["sass"], function() {

    browserSync.init ({
        notify: false,
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("sass/main.scss", ["sass"]);
    gulp.watch("index.html").on("change", browserSync.reload);
});

gulp.task("sass", function(){
    return gulp.src("sass/*.scss")
    .pipe(sass())
    .on("error", function(err){
        console.log(err.toString());
        this.emit("end");
    })
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

gulp.task("default", ["serve"]);