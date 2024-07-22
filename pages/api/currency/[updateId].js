import currency from './currency.json'
export default function handler(req, res) {
    const { query } = req
    const { updateId } = query
    const currencyObj = currency?.data.find((elem) => elem.id == updateId)
    res.status(200).json(currencyObj)
}