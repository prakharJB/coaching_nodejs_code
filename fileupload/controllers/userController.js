import UserModel from "../models/User.js";
//import bcrypt from "bcrypt";
import multer from "multer";
import fs from "fs";



var storage = multer.diskStorage({
    destination : function(req, file, cb){
        var dir = "./uploads";

        if(!fs.existsSync(dir))
        {
            fs.mkdirSync(dir);
        }
        cb(null,dir);

    },
    filename : function(req, file, cb){
        cb(null, file.originalname);
    }
});

var upload = multer({storage:storage}).array('files',12);

// app.post('/upload',(req, res, next)=>{

//     upload(req, res, function(err){
//     if(err){
//         return res.send("something wrong")
//     }
//     res.send("upload complete")
//     });
// })



class UserController {
    static home = (req, res) => {
        res.render("index");
    }

    static submit = async (req, res) => {
        try{
            upload(req, res, function(err){
                //console.log(req.body)
                //console.log(req.files[0].filename)
                
                if(err){
                    return res.send("something wrong")
                }
                const doc = new UserModel({
                    filename : req.files[0].filename,
                    path : req.files[0].path
                })
                   
                    //console.log(doc)
                    doc.save();
                   res.send("upload complete")
            });
        }catch (error) {
            console.log(error);
        }

    }

    static getAllDoc = async (req,res) => {
        try {
            const results = await UserModel.find();
            //console.log(results)
            res.render("image", {results: results});
            
            //res.render("image",result)
        } catch (error) {
            console.log(error);
        }
    }

}

export default UserController;

