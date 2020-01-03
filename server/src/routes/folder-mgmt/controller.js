import * as fs from 'fs';

const TABLES_ROUTE = './public/tables'

export const getFilesList = async () => {
  const list = await fs.promises.opendir(TABLES_ROUTE);
  const files = [];
  for await (const file of list) {
  	files.push(file.name);
  }

  return files.sort();
}

export const readFile = async (fileName) => {
	return await fs.promises.readFile(`${TABLES_ROUTE}/${fileName}`, 'utf8');
}