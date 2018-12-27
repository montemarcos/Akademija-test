import express from 'express';
import {Request, Response} from 'express'
import path from 'path';
import hbs from 'hbs';    


class App {

    app: express.Application;

    constructor(){
        this.app = express();
        this.routes();
        this.config();
        
    }

    config():void{
        this.app.use(express.static(path.join(__dirname, "../public")));
        hbs.registerPartials(path.join(__dirname, '../views/partials'));
        this.app.set('view engine', 'hbs');
        this.app.set('views', path.join(__dirname, '../views'));
    }

    routes(): void {
        const router = express.Router();

        router.get ('/', (req:Request, res:Response) => {
         res.send("Hello world") ;
         res.end();
        })

        router.get ('/about', (req:Request, res:Response) => {
           res.render('about');
        })
        
        router.get('/contact', (req:Request, res:Response) => {
            res.render('contact', {
                phonenumber: '068068540',
                email: "miroslav.mike@gmail.com"
            });
        }) 


        this.app.use ('/webpage', router);

    }

}

export default new App().app;

