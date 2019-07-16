const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const router = express.Router();
const passport = require('passport');
const appRoot = require('app-root-path');

require(`${appRoot}/api/middleware/authentication/passport`)

router.use(cors());
router.use(bodyParser());
router.use(passport.initialize());
router.options('*', cors())

export default router