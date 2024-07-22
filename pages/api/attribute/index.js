import attribute from './attribute.json'
export default function handler(req, res) {
    res.status(200).json(attribute)
}