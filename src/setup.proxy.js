const { createProxyMiddleWare } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        "/ws",
        createProxyMiddleWare({ target: "43.202.161.139:8080/", ws: true })
    );
}