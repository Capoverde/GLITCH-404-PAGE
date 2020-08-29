const { src, dest, parallel, series, task, watch } = require("gulp"),
  autoprefixer = require("gulp-autoprefixer"),
  browserSync = require("browser-sync").create(),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps"),
  concat = require("gulp-concat"),
  imagemin = require("gulp-imagemin"),
  changed = require("gulp-changed"),
  uglify = require("gulp-uglify"),
  lineec = require("gulp-line-ending-corrector");

// brwosersync
function browser_sync() {
  return browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });
}

// functionreload
function reload(done) {
  browserSync.reload();
  done();
}

// kopiowanie html'i
function html() {
  return src("src/*.html").pipe(dest("dist"));
}

// kompilowanie sass'a do css'a
function scss() {
  return src("src/assets/sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("dist/css"));
}

// concatenacja plików js
function js() {
  return src("src/assets/js/*.js")
    .pipe(concat("bundle.js"))
    .pipe(uglify())
    .pipe(dest("dist/js"));
}

// watch
const sassWatch = "./src/assets/sass/*.scss";
const jsWatch = "./src/assets/js/*.js";
const htmlWatch = "./src/*.html";

// watch_files function
function watch_files() {
  watch(sassWatch, series(scss, reload));
  watch(jsWatch, series(js, reload));
  watch(htmlWatch, series(html, reload));
}

task("html", html);
task("scss", scss);
task("js", js);
// Wszystko na raz:
task("default", parallel(html, scss, js));
// Śledzenie zmian w plikach i autoreload:
task("watch", parallel(browser_sync, watch_files));
