const express = require('express');
const router = express.Router();
const User = require('../db/models/user')
const Campus = require('../db/models/campus')

// api/student/

router.get('/', (req, res, next) => {
	console.log("in router.get")
	User.findAll({
		order: '"lastName" ASC'
	})
	.then((users) => {
		res.send(users)
	})
	.catch(next);
})


router.post('/', (req, res, next) => {
	console.log('req.body', req.body)
	User.findOrCreate({
		where: {
			firstName: req.body.student.firstName,
			lastName: req.body.student.lastName,
			email: req.body.student.email,
			phone: req.body.student.phone,
			dob: req.body.student.dob,
			status: req.body.student.status
		}
	})
	.spread((user, create) => {
		Campus.findById(req.body.student.campus)
		.then((foundCampus) => {
			user.setCampus(foundCampus)
			res.status(201).send(user)
		})
		.catch(next);
	})
})

router.put('/', (req, res, next) => {
	User.update(req.body)
	.then((updatedUser) => {
		res.send(updatedUser)
	})
	.catch(next);
})

router.delete('/', (req, res, next) => {
	User.destroy(req.body)
	.then(() => {
		res.status(200).send("User profile deleted.")
	})
	.catch(next);
})

router.get('/:id', (req, res, next) => {
	User.findById(req.params.id)
	.then((foundUser) => {
		console.log('foundUser: ', foundUser)
		if (foundUser) {
			foundUser.getFormattedDob;
			return foundUser
		} else {
			res.status(400).send("No such student found.")
		}
	})
	.then((formattedUser) => {
		res.send(formattedUser)
	})
	.catch(next);
})

module.exports = router;
