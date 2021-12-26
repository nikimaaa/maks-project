const User = require('./../models/user_model')
class UserService{
    async getAll(){
        const users = await User.find();
        return users;
    }
    async getbyId(id){
        const user = await User.findOne({_id: id});
        return user;
    }
    async createOne(userOptions){
        const user = User.create({...userOptions})
        return user;
    }
    async delete(id){
        await User.deleteOne({_id: id});
    }
}
module.exports = new UserService(); 