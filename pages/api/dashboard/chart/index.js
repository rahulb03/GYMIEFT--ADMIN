import chart from './chart.json'
export default function handler(req, res) {
    res.status(200).json(chart)
}