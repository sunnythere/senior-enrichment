const express = require('express');
const router = express.Router();
const Campus = require('../db/models/campus')

// api/campus/

router.get('/', (req, res, next) => {
	Campus.findAll({
		order: 'name ASC'
	})
	.then((campuses) => {
		res.send(campuses)
	})
	.catch(next);
})


router.post('/', (req, res, next) => {
	console.log("router, req.body: ", req.body)
	Campus.create(req.body.campus)
	//??? why not req.body?
	.then((newCampus) => {
		console.log("router: ", newCampus)
		res.status(201).send(newCampus)
	})
	.catch(next);
})


router.put('/:id', (req, res, next) => {
	console.log('req: ', req )
	Campus.findById(req.params.id)
	.then((foundCampus) => {
		if (foundCampus) {
			return foundCampus.update(req.body.campus)
		} else {
			res.status(400).send("No such campus found.")
		}
	})
	.then((updatedCampus) => {
		console.log('from router, updatedCampus: ', updatedCampus)
		res.send(updatedCampus)
	})
	.catch(next);
})


router.delete('/:id', (req, res, next) => {
	Campus.findById(req.params.id)
	.then((foundCampus) => {
		if (foundCampus) {
			res.send(foundCampus);
			foundCampus.destroy(req.body)
		} else {
			res.status(400).send("No such campus found.")
		}
	})
	.then(() => {
		res.status(200)
	})
	.catch(next);
})


router.get('/:id', (req, res, next) => {
	Campus.findById(req.params.id)
	.then((foundCampus) => {
		if (foundCampus) {
			res.send(foundCampus)
		} else {
			res.status(400).send("No such campus found.")
		}
	})
	.catch(next);
})

module.exports = router;