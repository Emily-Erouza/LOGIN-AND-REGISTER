<!-- how to start the mongobd  -->
npx nodemon app.js

<!-- every file i run i need to start it by  -->
npm start

This function is called saveForm and takes an app object as an argument. It appears to be a function that sets up route handlers for handling HTTP requests related to forms.
<!-- 
Post routes  -->
<!-- Setting Up Routes: -->
The code defines several HTTP routes using app.post, app.get, app.put, and app.delete. These routes correspond to different CRUD (Create, Read, Update, Delete) operations for form data.

<!-- POST /Form:  -->
This route is for creating a new form entry. It expects data in the request body (userName, surname, Email, Password), creates a new Form instance, saves it to the database, and sends a success message with the saved data.

<!-- GET /FormDetails:  -->
This route retrieves all form entries from the database and sends them as a response.

<!-- GET /details/:id:  -->
This route is intended to retrieve a specific form entry by its id. However, there is a mistake in the code as it tries to find the form entry using Form.findById but the Form model is being used, so it should be corrected.
Exporting the Function:
<!-- PUT /update/:id: -->
 This route is for updating an existing form entry. It expects the id in the URL parameters and data to update in the request body (userNamename, surname, Email, Password). It attempts to update the entry and sends a success message with the updated data.

<!-- DELETE /delete/:id: -->
 This route is for deleting a form entry by its id. It expects the id in the URL parameters, attempts to delete the entry, and sends a success message with the deletion status.
<!-- 
Error Handling: -->
The code includes try-catch blocks to handle exceptions that might occur during database operations or route handling. If an error occurs, it logs an error message and sends an appropriate response with an error status code.

<!-- Exporting the Function: -->
The saveForm function is exported as a module, which suggests that it can be used in other parts of the application by importing it.

Please note that there are some issues in the code, such as the incorrect usage of PhoneBook instead of Form in the GET /details/:id route, and potential issues with the PUT and DELETE routes that need to be addressed for the code to work correctly. Additionally, the database setup and connection code is not included in this snippet, so it's assumed that the Form model corresponds to a MongoDB schema, but the database connection is not shown here.



const Form = require("../models/mySchemas");

const saveForm = (app) => {
  app.post("/Form", async (req, res) => {
    try {
      const { userName, surname, Email, Password } = req.body;
      const formData = new Form({
        userName,
        surname,
        Email,
        Password
      });

      const formSave = await formData.save();
      res.status(201).send({
        message: "Successfully Saved",
        formSave,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

  app.get("/FormDetails", async (req, res) => {
    try {
      const findForm = await Form.find();
      res.send(findForm);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

  app.get("/details/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const findForm = await Form.findById(id);
      if (!findForm) {
        return res.status(404).send({ message: "Form not found" });
      }
      res.send(findForm);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

  app.put('/update/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { userName, surname, Email, Password } = req.body;
      const update = await Form.findByIdAndUpdate(id, {
        userName,
        surname,
        Email,
        Password
      }, { new: true });

      if (!update) {
        return res.status(404).send({ message: "Form not found" });
      }

      res.send({ message: "Successfully Updated", update });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

  app.delete('/delete/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deleteFormDetails = await Form.findByIdAndDelete(id);

      if (!deleteFormDetails) {
        return res.status(404).send({ message: "Form not found" });
      }

      res.send({ message: "Successfully Deleted", deleteFormDetails });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
};

module.exports = { saveForm };



