const router = require('express').Router();
const {
  getAllPatients,
  createPatient,
  getOnePatient,
  deletePatient,
  updateCurrentPatient
} = require('../../controllers/patients');

router.get('/', getAllPatients);
router.get('/:id', getOnePatient);
router.post('/', createPatient);
router.delete('/:id', deletePatient);
router.put('/:id', updateCurrentPatient);

module.exports = router;