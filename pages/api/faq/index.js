import faq from './faq.json'
export default function handler(req, res) {
    res.status(200).json(faq)
}