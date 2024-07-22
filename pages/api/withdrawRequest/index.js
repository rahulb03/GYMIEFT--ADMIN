import withdraw from './withdraw.json'
export default function handler(req, res) {
    res.status(200).json(withdraw)
}