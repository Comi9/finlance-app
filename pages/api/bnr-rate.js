// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const res = await fetch('https://www.bnr.ro/files/xml/years/nbrfxrates2020.xml')
  const rates = await res.text()

  res.statusCode = 200
  res.text(rates)
}
