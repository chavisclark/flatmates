import _ from 'lodash';
import Flat from '../models/flat';

export function add(req, res) {
  console.log('api initialized...');
  const flat = new Flat({
    name: req.body.data.name,
    price_per_month: req.body.data.price,
    rooms: req.body.data.rooms,
    beds: req.body.data.beds,
    capacity: req.body.data.capacity,
    location: req.body.data.location,
    description: req.body.data.description
  });
  console.log('Request recieved... ');

  flat.save((err, saved) => {
    if (err)
      throw (err)
    return saved;
  });
  
  console.log('Flat saved... ', flat );

  return res.json({message: flat.name + ' was added!'});
}

export function find(req, res) {
  console.log(req.body)
  const location = req.body.data.address;
  Flat.find({location: location}, (err, flats) => {
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
