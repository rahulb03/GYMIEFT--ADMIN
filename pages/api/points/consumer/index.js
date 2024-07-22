import point from './point.json'
export default function handler(req, res) {
    res.status(200).json(point)
}