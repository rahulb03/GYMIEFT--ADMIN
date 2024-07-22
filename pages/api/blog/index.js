import blog from './blog.json'
export default function handler(req, res) {
    res.status(200).json(blog)
}