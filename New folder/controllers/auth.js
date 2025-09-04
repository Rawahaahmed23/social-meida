const bcrypt = require('bcryptjs');
const db = require('../connect')
const jwt = require('jsonwebtoken');



const register = async(req,res)=>{
    const q = "SELECT * FROM users WHERE email = ?"
        db.query(q, [req.body.email], (err, data) => {
        if(err) return res.status(500).send(err)
        if(data.length) return res.status(409).json("User already exists")
            
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt); 
            
            const q = "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE(?)"
            const value = [req.body.username, req.body.email, hash, req.body.name]
            db.query(q,[value],(err,data)=>{
                if(err) return res.status(500).send(err)
                return res.status(200).json("User registered successfully")
            })
        
    })



}


const login = (req,res)=>{
q = "SELECT * FROM users WHERE email = ?"

db.query(q, [req.body.email], (err, data) => {
    if(err)return res.status(500).json(err)

 if (data.length === 0) return res.status(404).json("User not found")
     
const checkpassword = bcrypt.compareSync(req.body.password, data[0].password)
if (!checkpassword) return res.status(401).json("Invalid password")
    
const token = jwt.sign({id:data[0].id}, process.env.JWT_SECRET_KEY)
const {password,...others}= data[0]

res.cookie("token",token,{
    httpOnly:true,
     sameSite: "lax"
    

}).status(200).json({others})


})}



const logout = (req,res)=>{
    res.clearCookie("token", {
        secure:true,
        sameSite:"none"

    }).status(200).json({msg:"Logout Successful"})

}

module.exports = {register,login,logout}