import express from 'express';
import {getFilesList, readFile} from './controller';

var router = express.Router();

router.get('/list', async (req, res, next) => {
	try {
  		res.send(await getFilesList())
  	}
  	catch(error) {
  		next(error);
  	}
});

router.get('/file', async (req, res, next) => {
	try {
  		res.send(await readFile(req.query.name));
  	}
  	catch(error) {
  		next(error);
  	}
});

export default router;