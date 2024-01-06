import express from 'express';
const router = express.Router();

router.get('/student', (req, res) => {
    console.log("OK")
})

export default router;

