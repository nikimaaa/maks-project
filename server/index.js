const Koa = require('koa');
const app = new Koa();
const process = require('process');
const User = require('./models/user_model')
const mongoose = require('mongoose');
const userRouter = require('./routes/user_route')
const bodyParser = require('koa-bodyparser');

const connect = async ()=>{
    try{
        app.listen(4000);
        mongoose.connect('mongodb://localhost:27017/myapp');
    } catch(e){
        console.log(e);
        process.exit(1);
    }
}
app.use(bodyParser());
app.use(userRouter);
// const create = async () =>{
//     await User.create(
//         {
//             name: 'String',
//             password: 'String',
//             avatar: 'String',
//             age: 1 ,
//             desc: 'String',
//             iswhite: true
//         }
//     )
// }

connect();
//create();

