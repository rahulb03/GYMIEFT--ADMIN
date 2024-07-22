import media from './media.json'
export default function handler(req, res) {
    res.status(200).json(media)
}