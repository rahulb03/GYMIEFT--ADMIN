import review from './review.json'
export default function handler(req, res) {
    res.status(200).json(review)
}