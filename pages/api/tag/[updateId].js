import tag from './tag.json'
export default function handler(req, res) {
    const { query } = req
    const { updateId } = query
    const tagObj = tag?.data.find((elem) => elem.id == updateId)
    res.status(200).json(tagObj)
}