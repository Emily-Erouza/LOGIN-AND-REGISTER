const Form = require("../models/mySchemas");

const saveForm = (app) => {

  app.post("/Form", async (req, res) => {
    try {
      let { userName, surname, Email,Password } = req.body;
      let Form = new Form({
        userName,
        surname,
        Email,
        Password
      });

      const FormSave = await Form.save();
      res.send({
        massage: "Succesfully Saved",
        FormSave,
      });
    } catch (error) {
      console.log();
      res.send({ message: "Post Error" }).status(404);
    }
  });

  app.get("/FormDetails", async (req, res) => {
    try {
      const findForm= await Form.find();
      res.send(findForm);
    } catch (error) {
      console.log({ message: "Get Error" });
    }
  });

  app.get("/details/:id", async (req, res) => {
    try {
      const findForm = await Form.findById(req.body.id);
      res.send(findForm);
    } catch (error) {
      console.log({ message: "Get Error" });
    }
  });

  app.put('/update/:id', async (req,res) =>{
   const { id } = req.params;
   let { userNamename, surname, Email,Password } = req.body;

   try {
 const update = await Form.findOneAndUpdate(req.body.id,
        { _id: `${id}` },
        {userNamename, surname, Email,Password} )
        res.send({ message: "Succesfully Updated", update });
   } catch (error) {
      console.log({ message: "Editing Unsuccesfully" });
   }
  })

  app.delete('/delete/:id', async (req, res) =>{
   try {
      const { id } = req.params;
      const deleteFormDetails = await Form.deleteOne({id:id})
      
      res.send({ message: "Succesfully Updated", deleteFormDetails});
   } catch (error) {
      console.log({ message: "Deleting Unsuccesfully" })
      res.sendStatus(404)
   }
  });

};
module.exports = {saveForm}