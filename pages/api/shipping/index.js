import shipping from './shipping.json'
export default function handler(req, res) {
    res.status(200).json(shipping)
}