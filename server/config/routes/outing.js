import { controllers } from '../../db';

const outingsController = controllers && controllers.outings;

export default (app) => {
    app.post('/add-outing', outingsController.add);
    app.post('/find-outings', outingsController.find);
};