import * as express from 'express';
const logger = require('morgan');
const path = require('path');

const app = express();
const router = express.Router();
app.use(logger('tiny'));

app.set('views', path.join(__dirname, '..', '/dist/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '.', '/public')));

app.use('/', router);
router.get('', (req, res) => {
    res.render('index');
});

app.listen(8000);