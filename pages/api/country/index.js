import country from './country.json'
export default function handler(req, res) {
    res.status(200).json(country)
}