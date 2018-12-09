const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
app.use(cors('*'));