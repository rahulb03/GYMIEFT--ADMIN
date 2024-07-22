import category from './category.json'
export default function handler(req, res) {
    const { query } = req
    const { updateId } = query
    const categoryObj = category?.data.find((elem) => elem.id == updateId)
    res.status(200).json(categoryObj)
}