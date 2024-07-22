import category from './category.json'
export default function handler(req, res) {
    res.status(200).json(category)
}