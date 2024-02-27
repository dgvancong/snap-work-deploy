const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const ExcelJS = require('exceljs');


app.use(morgan('dev'));
const port = 5000;
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var projectRouter = require('./router/Project');
app.use('/project', projectRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
