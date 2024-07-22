import attribute from './attribute.json'
export default function handler(req, res) {
    const { query } = req
    const { updateId } = query
    const attributeObj = attribute?.data.find((elem) => elem.id == updateId)
    res.status(200).json(attributeObj)
}