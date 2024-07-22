import count from './count.json'
export default function handler(req, res) {
    res.status(200).json(count)
}