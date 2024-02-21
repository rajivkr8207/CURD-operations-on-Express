var express = require('express');
var router = express.Router();
const Usermodel = require('./users')


/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index');
});

router.get('/read', async (req, res, next)=> {
  let allusers = await Usermodel.find()
  res.send(allusers);
});
router.get('/delete/:userspace', async (req, res, next)=> {
  let delusers = await Usermodel.findOneAndDelete({
    username: req.params.userspace
  })
  console.log(delusers)
  res.send(delusers);
});

router.get('/create', async (req, res, next)=> {
 const createuser = await Usermodel.create({
  username: "jack4",
  age: 31,
  name: "Rajiv roy2"
});
  res.send(createuser);
});

module.exports = router;
