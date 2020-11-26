require('isomorphic-fetch')
import { parseString } from 'xml2js'
import { find, map, isEqual, isEmpty } from 'lodash'

const DEFAULT_CURRENCY = 'EUR'
const BNR_DATE_FORMAT_PATTERN = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
const PARSER_CONFIG = { attrkey: 'key', charkey: 'value', normalizeTags: true, mergeAttrs: true }

let XML_RATES = []
async function fetchXMLrates() {
  await fetch('https://www.bnr.ro/files/xml/years/nbrfxrates2020.xml')
    .then(response => response.text())
    .then(xmlRatesResponse => XML_RATES = xmlRatesResponse)
    .catch( error => console.log(error))
}

function parseRates(xmlRates, date, currency) {
  let data = []
  if (!xmlRates) return

  parseString(xmlRates, PARSER_CONFIG, (err, result) => data = result.dataset.body[0].cube)
  const selectedDateRates = find(data, datum => datum.date[0] === date)
  const selectedCurrencyRate = selectedDateRates && find(selectedDateRates.rate, rate => rate.currency[0] === currency.toUpperCase())

  return { currency: currency.toUpperCase(), date, rate: selectedCurrencyRate.value }
}

export default async (req, res) => {
  let { date, currency } = req.query;
  if (isEmpty(currency)) currency = DEFAULT_CURRENCY
  if (!date) res.json({ code: 'MISSINNG_DATE' })
  if (!BNR_DATE_FORMAT_PATTERN.test(date)) res.json({ code: 'DATE_PATTERN_MISMATCH' })
  
  await fetchXMLrates()

  res.statusCode = 200
  res.json(await parseRates(XML_RATES, date, currency))
}
