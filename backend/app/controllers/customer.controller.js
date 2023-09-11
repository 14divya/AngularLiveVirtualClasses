const db = require("../models");
const Customers = db.customers;
const Op = db.Sequelize.Op;

// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Customer
    const customer = {
        name: req.body.name,
        address: req.body.address,
        gender: req.body.gender,
        addcourses: req.body.addcourses,
    };

    // Save Customer in the database
    Customers.create(customer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        });

};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Customers.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        });

};

// Update a Customer by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Customers.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Customer with id=${id}. Maybe Customer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Customer with id=" + id
            });
        });

};

// Delete a Customer with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Customers.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Customer with id=" + id
            });
        });
};
