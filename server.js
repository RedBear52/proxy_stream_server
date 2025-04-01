const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const app = express()

app.use(
  '/proxy-stream',
  createProxyMiddleware({
    target: 'http://kdhx-ice.streamguys1.com/live',
    changeOrigin: true,
    pathRewrite: {
      '^/proxy-stream': '/live',
    },
  })
)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Proxy running on port ${port}`)
})
