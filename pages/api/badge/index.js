import badge from './badge.json'
export default function handler(req, res) {
    res.status(200).json(badge)
}