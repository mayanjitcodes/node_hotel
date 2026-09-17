import express from 'express';
import MenuItem from '../models/MenuItem.js';


const router=express.Router();

router.post('/', async (req, res) => {

  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log("'data is save");
    res.status(200).json(response);



  } catch (err) {
    console.log(err);
    req.status(500).json({ error: 'INTERNAL SERVER ERROR' });
  }
})

router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log('data will be fatch');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'INTER NAL ERROR SP PLZ CHECK IT ' })
  }
})

router.get('/:munu',async(req,res)=>{
try{
const kutul=req.params.munu;
if(kutul=='sweet'|| kutul=='spicy' || kutul=='sour'){
const response= await MenuItem.find({taste:kutul});
console.log("data will be fatch");
res.status(200).json(response);


}else{
req.status(404).json({error:'invalid end point so plz chose correct path'});
}
}catch(err){
    console.log(err);
req.status(500).json({error: 'internal so plz chack it'});
}
})

// update operation is performed
router.put('/:id',async(req,res)=>{
try{
const menuid = req.params.id;
const menuupdatedata=req.body;

const response= await MenuItem.findByIdAndUpdate(menuid,menuupdatedata,{
new:true,
runValidators:true,
});

console.log(" change the data");
res.status(200).json(response);
if(!response){
    console.log("not valid this id");
    res.status(404).json({error:'this id is not present in data base'})
}


}catch(err){
console.log(err);
res.status(500).json({error:'INTERNAL ERROR PLZ CHACK '});
}


})




routre.delete('/:id',async(req,res)=>{
  try{
    const menuid=req.params.id;
    const response=  await MenuItem .findByIdAndDelete(personid);
    
    if(!response){
      res.status(404).json({error:'this person is no valid in our data base'});}
      console.log("data deletted");
      res.status(200).json({message:'deleted sucessfully'});

  }catch(err){
    console.log(err);
    res.status(500).json({ error: 'INTER NAL ERROR SP PLZ CHECK IT ' });
  }
})




export default router;
