
import express from 'express';


export const userRouter = express.Router();

userRouter.post('/signup', (req, res)=> {
    res.json({message: 'signup'})
})

userRouter.post('/signin', (req, res)=> {
    res.json({message: 'login'})
})

userRouter.post('/forgetPassword', (req, res) => {
    res.json({message: 'forgetPassword'})
})

userRouter.post('/resetPassword', (req, res) => {
    res.json({message: 'resetPassword'})
})



