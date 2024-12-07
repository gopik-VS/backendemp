  const mongoose = require('mongoose');
  mongoose.connect("mongodb+srv://gopikagooy:gopika@cluster0.bocmt.mongodb.net/?retryWrites=true&w=majority&appName=cluster0")
  .then(()=>{
    console.log("connected")
  })
   .catch((err)=>{
      console.log(err)
   })