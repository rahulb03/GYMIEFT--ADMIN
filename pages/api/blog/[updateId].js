import blog from './blog.json'
export default function handler(req, res) {
    const { query } = req
    const { updateId } = query
    const blogObj = blog?.data.find((elem) => elem.id == updateId)
    res.status(200).json(blogObj)
}