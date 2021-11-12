const User = require('./../models/user_model');
const UserService = require('./../services/UserService');
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
            const user = await UserService.createOne(userOptions);
            ctx.body = user;
        } catch (e) {
            
        }
    }
    async delete(ctx){
        try {
            const id = ctx.params.id;
            await UserService.delete(id);
            ctx.body = id;
        } catch (e) {
            
        }
    }
}
module.exports = new UserController();