const joi = require('joi')

const validateAddUsers=(user)=>{
    const schema=joi.object({
        name:joi.string().min(3).max(20).required(),
        email:joi.string().min(3).max(100).required(),
        password:joi.string().min(3).max(100).required(),
        FavProduct:joi.array(),
        role:joi.string()
    })
    return schema.validate(user)

const validateAddUsers = (user) => {
  const schema = joi.object({
    name: joi.string().min(3).max(20).required(),
    email: joi.string().min(3).max(100).required(),
    password: joi.string().min(3).max(100).required(),
    phone: joi.string(),
    address: joi.string(),
    FavProduct: joi.array(),
  })
  return schema.validate(user)
}

module.exports = { validateAddUsers }
