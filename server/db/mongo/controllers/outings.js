import retext from 'retext';
import nlcstToString from 'nlcst-to-string';
import keywords from 'retext-keywords';
import bayes from '../../../../forked_modules/bayes';
import Outing from '../models/outing';
const classifier = bayes();

(function () {
  classifier.learn('shoot some hoops', 'sports');
  classifier.learn('out to the club','nightlife');
  classifier.learn('dance at the bar','nightlife');
  classifier.learn('play ball','sports');
  classifier.learn('shop at the mall','casual');  
  classifier.learn('hang by the pool','casual'); 
  classifier.learn('netflix and chill','casual');  
  classifier.learn('hike the mountain','outdoors');
  classifier.learn('camp out in the woods','outdoors');
  classifier.learn('bike riding','sports');
  classifier.learn('cycling','sports');
  classifier.learn('drunk','nightlife');
  classifier.learn('swim','casual');
  classifier.learn('drink wine','nightlife');
  classifier.learn('drink beer','nightlife');
  classifier.learn('lift weights at gym','sports');
  classifier.learn('run 10 miles','nightlife');
  classifier.learn('play ball','sports');
})();

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
    category: classifier.categorize(text),
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
  console.log(classifier.probabilities(text))

  return res.json({current: outing, message: outing.text + ' was added!'});
}

export function find(req, res) {
  const today = new Date();

  Outing.find({owner: req.user._id}, (err, updated) => {
    if (err) {
      return res.json({message: err});
    }
    const outings = updated.filter((outing) => {
      var expirationDate = new Date(outing.expire)
      return expirationDate > today || !outing.expire;
    })

    return res.json({outings: outings});
  })
}

export default {
  add,
  find
};
