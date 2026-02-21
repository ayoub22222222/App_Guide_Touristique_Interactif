const useRepo = require('../repositories/user.repository')



const createUser = async (data) => {
    if (!data.firstname || !data.lastname || !data.email || !data.password) {
        throw new Error("you need to put all the information toghether to signe up")
    }
    return useRepo.createUser(data)
}

const getUsers = () => {
    return useRepo.getAllUsers()
}











module.exports = {createUser, getUsers}