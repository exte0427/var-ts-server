import express from "express";
import { File } from "./file"

export namespace Server {
    export const start = (port: string) => {
        const app = express();

        app.use(`/Build`, express.static(File.Folder.build()));
        app.use(`/Asset`, express.static(File.Folder.asset()));
        app.get(`/*`, (req, res) => {
            res.sendFile(File.join(File.Folder.build(), `index.html`));
        });

        app.listen(port);
    }

    export const test = (port: string) => {
        const app = express();

        app.use(`/Test`, express.static(File.join(process.cwd(), `Test`)));
        app.get(`/*`, (req, res) => {
            res.sendFile(File.join(File.join(process.cwd(), `Test`), `index.html`));
        });

        app.listen(port);
    }
}
/*
Work
ㄴ router.tsx
ㄴ app.tsx
Build
ㄴ server.ts
ㄴ dist.js
ㄴ index.html
*/