import fs from 'node:fs/promises';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRouter from './routes/authRoutes.js';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 5000;
const BASE = process.env.BASE || '/';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRouter);

let vite;
if (!IS_PRODUCTION) {
    const {createServer} = await import('vite');
    vite = await createServer({
        server: {middlewareMode: 'html'},
        appType: 'custom',
        BASE,
    });
    app.use(vite.middlewares);
} else {
    const compression = (await import('compression')).default;
    const sirv = (await import('sirv')).default;
    app.use(compression());
    app.use(BASE, sirv('../dist/client', {extensions: []}));
}

app.use('*', async (req, res) => {
    let template;
    if (!IS_PRODUCTION) {
        template = await fs.readFile('./index.html', 'utf-8');
        template = await vite.transformIndexHtml(req.originalUrl, template);
    } else {
        template = await fs.readFile('../dist/client/index.html', 'utf-8');
    }
    res.status(200).set({'Content-Type': 'text/html'}).send(template);
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})
