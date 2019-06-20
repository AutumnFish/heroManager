const express = require('express')
const path = require('path')
// 路由
const userRouter = require(path.join(__dirname,'./routers/userRouter'))

const app = express()

// 注册路由
app.use('/user',userRouter)

app.listen(4399,()=>{
  console.log('success');
})