import currency from './currency.json'
export default function handler(req, res) {
    res.status(200).json(currency)
}