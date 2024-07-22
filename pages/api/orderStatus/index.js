import orderStatus from './orderStatus.json'
export default function handler(req, res) {
    res.status(200).json(orderStatus)
}