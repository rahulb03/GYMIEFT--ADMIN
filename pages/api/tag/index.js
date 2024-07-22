import tag from './tag.json'
export default function handler(req, res) {
    res.status(200).json(tag)
}