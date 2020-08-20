require('isomorphic-fetch')
import { parseString } from 'xml2js'
import { find, isEqual, map } from 'lodash'

const PARSER_CONFIG = { attrkey: 'key', charkey: 'value', normalizeTags: true, mergeAttrs: true }

const data = []

fetch('https://www.bnr.ro/files/xml/years/nbrfxrates2020.xml')
  .then((response) => { return response.text(); })
  .then( d => {
    // console.log(d)
    return { data: d }
  })
  .catch( error => { console.log(error); })
  
export default async (req, res) => {
  console.log(req.query)
  res.statusCode = 200
  res.json({ data })
}