import retext from 'retext';
import nlcstToString from 'nlcst-to-string';
import keywords from 'retext-keywords';
import nlp from 'nlp_compromise';
import Outing from '../models/outing';

export function add(req, res) {
  const text = req.body.data.text;
  const exDate = req.body.data.expire;
  let outingKeywords = [];
  let today = new Date(Date.now());
  let expire = today.setDate(today.getDate() + 1);

  if (exDate == 2)
    return expire
  if (exDate == Infinity)
    return expire = ''
  if (exDate == 1)
    return expire = today.setHours(24,0,0,0);
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
    sent: today,
    expire: expire,
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
  console.log(req.body)
  const location = req.body.address;
  Outing.find({location: location}, (err, outings) => {
    if (err) {
      throw err
    }
    return res.json({data: outings});
  })
}

export default {
  add,
  find
};
