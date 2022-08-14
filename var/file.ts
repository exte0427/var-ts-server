import path from 'path';
export namespace File {
    export const workPlace = () => {
        return process.cwd();
    }

    export namespace Folder {
        export const build = () => {
            return path.join(workPlace(), `Build`);
        }
        export const work = () => {
            return path.join(workPlace(), `Work`);
        }
        export const asset = () => {
            return path.join(workPlace(), `Asset`);
        }
    }

    export const join = path.join;
}

/*
Work
ㄴ router.tsx
ㄴ app.tsx
Asset
ㄴ asdf.png
Build
ㄴ server.ts
ㄴ dist.js
ㄴ index.html
*/