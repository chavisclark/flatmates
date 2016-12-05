import _ from 'lodash';
import Outing from '../models/flat';

export function add(req, res) {
  const title = req.body.data.title;
  
  console.log('api initialized...');
  const flat = new Outing({
    title: req.body.data.title,

  });
  console.log('Request recieved... ');

  flat.save((err, saved) => {
    if (err)
      throw (err)
    return saved;
  });
  
  console.log('Outing saved... ', flat );

  return res.json({message: flat.name + ' was added!'});
}

export function find(req, res) {
  console.log(req.body)
  const location = req.body.address;
  Outing.find({location: location}, (err, flats) => {
    if (err) {
      throw err
    }
    return res.json({data: flats});
  })
}

export default {
  add,
  find
};
