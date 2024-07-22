import tax from './tax.json'
export default function handler(req, res) {
    res.status(200).json(tax)
}