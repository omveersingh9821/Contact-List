const express = require("express");
const Router = express.Router();

//require schema
const UserDetails = require('../models/schema');

// const contactList = [
//     {
//         name: "Om",
//         phone: "1234567890"
//     },
//     {
//         name: "Raj",
//         phone: "1234567890"
//     },
//     {
//         name: "Rohan",
//         phone: "1234567890"
//     }
// ]

//Get all Data from Database
Router.get("/", async (req, res) => {
  //    return res.status(200).json({ message: 'hello om' });
  // console.log(res.locals);
  const data = await UserDetails.find({}).sort({ name: 1 });
  // console.log(data);
  return res.render("home", {
    title: "Contacts List",
    // contact_list: contactList
    contact_list: data,
  });
});

//Add data to DB usin post request
Router.post("/add", async (req, res) => {
  // console.log(req.myName); //user defined property in middleware
  const { name, phone } = req.body;
  const data = await UserDetails.create(req.body);
  console.log(data);
  data.save();
  // contactList.push(req.body);
  res.redirect("back");
});

//delete using params
// Router.get('/delete/:phone', (req, res) => {
//     console.log(req.params);
//     let data = req.params.phone;
//     let index = contactList.findIndex(() => {
//         return contactList.phone == data;
//     })
//     contactList.splice(index, 1);
//     res.redirect('back');
// })

// delete using query
Router.get("/delete/", async (req, res) => {
//   console.log(req.query);
  // let data = req.query.phone;
  // let index = contactList.findIndex((contact) => {
  //     return contact.phone == data;
  // })
  // contactList.splice(index, 1);
  await UserDetails.findByIdAndDelete(req.query.id);
  res.redirect("back");
});

// Router.get('/practice', (req, res) => {
//     return res.render('practice', {
//         title:'Practice' //context
//     })
// })

module.exports = Router;
