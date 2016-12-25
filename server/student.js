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
	User.findOne({
		where: {  id: req.params.id  },
		include: [Campus]
	})
	//??? produces obj w/in obj... results in error when trying to render: Objects are not valid as a React child
	// .then((foundUser) => {
	// 	let campus = foundUser.campus
	// 	foundUser.campus = [];
	// 	foundUser.campus.push(campus);
	// })
	//??? trying to rearrange into array does not work either; not even on front end
	//User.findById(req.params.id)
	.then((foundUser) => {
		if (!foundUser) {
			res.status(400).send("No such student found.")
		}
		res.send(foundUser);
	})
	.catch(next);
})



module.exports = router;
