import { validationResult, check } from 'express-validator';

export const validateContact = [
  check('name', 'Name is required').not().isEmpty().trim().escape(),
  check('email', 'Please include a valid email').isEmail().normalizeEmail(),
  check('subject', 'Subject is required').not().isEmpty().trim().escape(),
  check('message', 'Message must be at least 10 characters long').isLength({ min: 10 }).trim().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
