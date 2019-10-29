import express from 'express';
import deebug from 'debug';
import chalk from 'chalk';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const app = express();
const debug = deebug('index');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/* cors middleware */
app.use(cors());
const apiRoute = '/api/';

app.listen(PORT, () => {
  debug(`listening on port ${chalk.green(PORT)}`);
});
