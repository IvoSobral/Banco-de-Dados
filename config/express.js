import express from "express";

const app = express();

app.use(express.json);

app.use(exoress.urlenconded({extend: false})

);

export default app;