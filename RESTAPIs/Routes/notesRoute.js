const express =  require("express")
const mongoose = require('mongoose')
const {postNewNote, getAllNotes, updateNote, deleteNote, fetchNote} = require('../Controller/notesController')
//Function
const router = express.Router()

//APIs End Points

//1. GET Method - Fetch the Data
router.get('/',getAllNotes) 
//---------------------------------------------------------------
//2. POST Method (new note post)
router.post('/' , postNewNote) //(req,res)=>{  (cut and paste on controller file)
// // //    const data = {
// // //        name:req.body.name,
// // //        age:req.body.age
// // //    }
// // //    res.status(200).json({message:"New Note Created", data:data })
// // // })
//    // //1)Recieve Data for Storing into Database
//     const note = {
//       title : req.body.title,
//       body : req.body.body
//     }

//     //2) Use Mongoose command to store data into MongoDB
//     //model.create(object)
//     Note.create(note)


//     //3)Respond back to user
//     res.status(200).json({message:"New Note Created", note:note })
// }
//-----------------------------------------------------------------------

//3. PUT Method //particular note want to uodate using id only.(konsa particular note update krna chahte ho)
router.put('/:id',updateNote)

//4. Delete Method //perticuller note want to Delete.
router.delete('/:id',deleteNote )

//5.Fetch a Single note
router.get('/:id',fetchNote )

module.exports =  router