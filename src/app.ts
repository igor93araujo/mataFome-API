import express from 'express';
const cors = require('cors');
import router from './routes';


class App {
    public app: express.Express;

    constructor() {
    
        this.app = express();
        this.routes();
    }

 
    public cors = (): void => {
        this.app.use(cors({
            origin: '*'
          }));
    }

    public start(PORT: string | number): void {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
      }

    private routes(): void {
        this.cors();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(router);
    }
}

export {
    App
};

export const {app} = new App();