const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
	res.render('index');
});

router.post('/',function(req,res) { 
  res.json( {message: "Thank you. You are now subscribed." });  
});



module.exports = router;