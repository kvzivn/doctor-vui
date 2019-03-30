var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    browserSync = require("browser-sync").create();

var paths = {
    styles: {
        src: "scss/*.scss",
        dest: "css"
    }
};

function style() {
    return gulp
        .src(paths.styles.src)
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

function reload(done) {
    browserSync.reload();
    done();
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(paths.styles.src, style);
    gulp.watch("*.html", reload);
}

var start = gulp.parallel(style, watch);

gulp.task('default', start);