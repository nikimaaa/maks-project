const Koa = require('koa');
const app = new Koa();
const process = require('process');
const mongoose = require('mongoose');
const userRouter = require('./routes/user_route')
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app.use(async(ctx, next)=>{
    await next();
})


app.use(userRouter);


const connect = async ()=>{
    try{
        app.listen(4000);
        mongoose.connect('mongodb://localhost:27017/myapp');
    } catch(e){
        console.log(e);
        process.exit(1);
    }
}


connect();
