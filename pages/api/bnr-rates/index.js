require('isomorphic-fetch')
import { parseString } from 'xml2js'
import { find, isEqual, map } from 'lodash'

const PARSER_CONFIG = { attrkey: 'key', charkey: 'value', normalizeTags: true, mergeAttrs: true }

let _data = []

const a = async () => {
  await fetch('https://www.bnr.ro/files/xml/years/nbrfxrates2020.xml')
  .then((response) => { return response.text(); })
  .then(d => _data = d)
  .catch( error => { console.log(error); })
}
  
export default async (req, res) => {
  console.log(req.query)
  await a()
  // let data = []
  // if (!rates) return false
  // parseString(rates, PARSER_CONFIG, (err, result) => data = result.dataset.body[0].cube)
  // const selectedDateRates = find(data, datum => datum.date[0] === date)
  // const selectedCurrencyRate = selectedDateRates && find(selectedDateRates.rate, rate => rate.currency[0] === currency)
  // return selectedCurrencyRate ? selectedCurrencyRate.value : 'n/a'


  res.statusCode = 200
  res.json({ _data })
}