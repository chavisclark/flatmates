import { controllers } from '../../db';

const flatsController = controllers && controllers.flats;

export default (app) => {
    app.post('/add-flat', flatsController.add);
    app.post('/find-flats', flatsController.find);
};