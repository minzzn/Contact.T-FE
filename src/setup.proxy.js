const { createProxyMiddleWare } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        ["/auth","/ws","/chat", "/room", "/entry"],
        createProxyMiddleWare({ 
            target: `${process.env.REACT_APP_BACKEND_API_URL}`,
            ws: true,
            changeOrigin: true,
            onProxyRes: (proxyRes, req, res) => {
                // CORS 허용 설정을 추가
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
                res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
            }, 
        }),
    );
};