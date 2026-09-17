import express from 'express';
import person from '../models/person.js';

const routre =express.Router();


routre.post('/', async (req, res) => {
  try {

    const data = req.body //Assuming request body containing the person data
    // create a new peron documents using the mongoose model
    const newperson = new person(data);


    // save the new person tothe data base
    const response = await newperson.save();
    console.log('data savev');
    res.status(200).json(response);

  } catch (err) {
    console.log("error");
    res.status(500).json({ error: 'internal server error' });
  }
});

routre.get('/', async (req, res) => {
  try {
    const data = await person.find();
    console.log('data fatch');
    res.status(200).json(data);

  } catch (err) {
    console.log("error");
    res.status(500).json({ error: 'internal server error' });
  }
})


routre.get('/:worktype', async (req, res) => {
  try {
    const worktype = req.params.worktype;

    if (worktype == 'chef' || worktype == 'manager' || worktype == 'waiter') {

      const response =await person.find({ work: worktype });
      console.log('response fatch');
      res.status(200).json(response);

    } else {
      res.status(404).json({ error: 'INVALID WORK TYPE PLZ CORRECT URL ENTER' })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'INTER NAL ERROR SP PLZ CHECK IT ' });
  }
})

routre.put('/:id',async(req,res)=>{
  try{
    const personid=req.params.id;
    const updatepersondata=req.body;
    const response= await person.findByIdAndUpdate(personid,updatepersondata,{
      new: true, //Return the update document
      runValidators:true,  //update data for the person
    })

    console.log("data updated");
    res.status(200).json(response);

    if(!response){
      res.status(404).json({error:'this person is no valid in our data base'});
    }

  }catch(err){
     console.log(err);
    res.status(500).json({ error: 'INTER NAL ERROR SP PLZ CHECK IT ' });

  }
})

routre.delete('/:id',async(req,res)=>{
  try{
    const personid=req.params.id;
    const response=  await person.findByIdAndDelete(personid);
    
    if(!response){
      res.status(404).json({error:'this person is no valid in our data base'});}
      console.log("data deletted");
      res.status(200).json({message:'deleted sucessfully'})

  }catch(err){
    console.log(err);
    res.status(500).json({ error: 'INTER NAL ERROR SP PLZ CHECK IT ' });
  }
})



export default routre;