const path = require("path").resolve;

module.exports = () => {
    return {
        context: path("app"),
        entry: "./src/bootstrap",
        output: {
            filename: "bundle.js",
            path: path("dist"),
            publicPath: "./dist/"
        }
    };
}