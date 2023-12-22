// Create web server

// Import express
const express = require('express');
const router = express.Router();

// Import controller
const commentsController = require('../controllers/comments');

// Import middleware
const authMiddleware = require('../middlewares/auth');

// Create route
router.get('/', commentsController.getAllComments);
router.post('/', authMiddleware.checkLogin, commentsController.addComment);
router.put('/:id', authMiddleware.checkLogin, commentsController.updateComment);
router.delete('/:id', authMiddleware.checkLogin, commentsController.deleteComment);

module.exports = router;