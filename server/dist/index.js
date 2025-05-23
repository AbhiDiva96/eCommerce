"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = require("./routes/userRouter");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1/user', userRouter_1.userRouter);
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
