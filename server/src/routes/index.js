import express from 'express';
import folder from './folder-mgmt';

var router = express.Router();

router.use('/folder', folder);

export default router;