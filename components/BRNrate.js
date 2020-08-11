import { parseString } from 'xml2js'
import { find, isEqual, map } from 'lodash'

const PARSER_CONFIG = { attrkey: 'key', charkey: 'value', normalizeTags: true, mergeAttrs: true }

function BRNrate({ rates, date, currency }) {
  let data = []
  if (!rates) return false
  parseString(rates, PARSER_CONFIG, (err, result) => data = result.dataset.body[0].cube)
  const selectedDateRates = find(data, datum => datum.date[0] === date)
  const selectedCurrencyRate = selectedDateRates && find(selectedDateRates.rate, rate => rate.currency[0] === currency)
  return selectedCurrencyRate ? selectedCurrencyRate.value : 'n/a'
}

export default BRNrate