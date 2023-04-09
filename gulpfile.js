const { src, dest, series } = require("gulp");
const origin = "src";
const destination = "build";
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
sass.compiler = require("node-sass");

function css(cb) {
  src(`${origin}/styles/*.scss`)
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(concat("style.min.css"))
    .pipe(dest(`${destination}/css`));
  cb();
}
function html(cb) {
  src("public/index.html").pipe(dest("build"));
  cb();
}
exports.default = series(html, css);
