const moment = require('moment/moment');
const db = require('../connect');
const jwt = require('jsonwebtoken');

const getpost = async (req, res) => {
    try{
        const token = req.cookies.token;

        if(!token) return res.status(401).json("Not loged in");
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userInfo) => {
             
        if(err)return res.status(403).json("Token is not valid");
        const q =`SELECT p.*,userid,name,profilePic From post As p JOIN users As u ON (u.id = p.userid) LEFT Join relationships as r ON (p.userid = r.followedUserid) Where r.followerUserid =? OR p.userid = ? ORDER By p.createdat DESC`;
        db.query(q, [userInfo.id,userInfo.id] , (err, data)=>{
            if (err)return res.status(500).json(err);
        return res.status(200).json(data);
        })
        })



    }catch(error){
         console.log(error);
    }
}




const addpost = async (req, res) => {
    try{
        const token = req.cookies.token;

        if(!token) return res.status(401).json("Not loged in");
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userInfo) => {
             
        if(err)return res.status(403).json("Token is not valid");
     const q = "INSERT INTO post (`des`, `img`, `createdat`, `userid`) VALUES (?)";
        const values = [
            req.body.des,
            req.body.img,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            userInfo.id
        ]
        console.log(userInfo.id);
        
        db.query(q, [values] , (err, data)=>{
            if (err)return res.status(500).json(err);
        return res.status(200).json("Post has been created");
        })
        })



    }catch(error){
         console.log(error);
    }
}
module.exports = {getpost,addpost}