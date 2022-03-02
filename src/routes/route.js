const {
  express, path,
} = require('../index');

const fetchNewsData = require('../controllers/fetch');

const router = express.Router();

const filePath = path.join(__dirname, '..', '..', 'public');

router.use(express.static(filePath));

router.post('/search', (req, res) => {
  fetchNewsData(req, res);
});

module.exports = router;
