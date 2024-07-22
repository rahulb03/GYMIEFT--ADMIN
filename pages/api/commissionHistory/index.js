import commission from './commission.json'
export default function handler(req, res) {
    res.status(200).json(commission)
}