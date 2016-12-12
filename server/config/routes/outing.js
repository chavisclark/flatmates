import { controllers } from '../../db';

const outingsController = controllers && controllers.outings;

export default (app) => {
    app.post('/add-outing', outingsController.add);
    app.get('/find-outings', outingsController.find);
};