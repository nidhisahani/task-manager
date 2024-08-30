const { Router } = require('express');
const { authenticateToken } = require('../middleware/authMiddleware');
const { getTasks, addTask } = require('../controllers/taskController');

const router = Router();

router.get('/', authenticateToken, getTasks);
router.post('/', authenticateToken, addTask);

export default router;
