import retext from 'retext';
import nlcstToString from 'nlcst-to-string';
import keywords from 'retext-keywords';
import nlp from 'nlp_compromise';
import Outing from '../models/outing';

export function add(req, res) {
  const text = req.body.text;
  const exDate = req.body.expire;
  const outingKeywords = [];
  const today = new Date();
  
  let expire = (exDate) => {
    if (exDate == 2)
      return new Date(today.setHours(48,0,0,0));
    if (exDate == Infinity)
      return ''
    if (exDate == 1)
      return new Date(today.setHours(24,0,0,0));
  }

  //fix times and configure keyword search
  let keywordFn = () => {
    retext().use(keywords).process(text, (err, file) => {
      file.data.keywords.forEach((keyword)=>{
        outingKeywords.push(nlcstToString(keyword.matches[0].node))
      })
    })    
    return outingKeywords
  }
  console.log('api initialized...');
  
  const outing = new Outing({
    owner: req.user._id,
    text: text,
    keywords: keywordFn(),
    sent: new Date(),
    expire: expire(exDate),
  });

  console.log('Request recieved... ');
  outing.save((err, saved) => {
    if (err)
      throw (err)
    return saved;
  });
  
  console.log('Outing saved... ', outing );

  return res.json({message: outing.text + ' was added!'});
}

export function find(req, res) {
  Outing.find({owner: req.user._id}, (err, outings) => {
    if (err) {
      return res.json({message: err});
    }
    return res.json({outings: outings});
  })
}

export default {
  add,
  find
};
