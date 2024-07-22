import page from './page.json'
export default function handler(req, res) {
    res.status(200).json(page)
}