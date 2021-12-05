const User = require('./../models/user_model');
const UserService = require('./../services/UserService');
const { Validator } = require('node-input-validator');
class UserController{
    async getAll(ctx){
        try {
            const users = await UserService.getAll();
            ctx.body = users;
        } catch (e) {
            console.log(e);
        }
    }
    async getbyId(ctx){
        try {
            const id = ctx.params.id;
            const user = await UserService.getbyId(id);
            ctx.body = user;
        } catch (e) {
            console.log(e);
        }
    }
    async create(ctx){

        try {
            const newUser = ctx.request.body;

            const v = new Validator(newUser, {
                age: "required|between:0,150",
                avatar: "required|url",
                desc: "maxLength:5",
                iswhite: "notIn:no",
                name: "required|minLength:2|maxLength:30",
                password: "required|minLength:4"
            })

           const matched = await v.check();

           if(!matched){
               ctx.status = 422;
               ctx.body = v.errors;
               throw v.errors
           }

            const user = await UserService.createOne(newUser);
            ctx.body = user;
        } catch (e) {
            ctx.status = 422; 
            ctx.body = e;
        }
    }
    async delete(ctx){
        try {
            const id = ctx.params.id;
            await UserService.delete(id);
            ctx.body = id;
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new UserController();