import tax from './tax.json'
export default function handler(req, res) {
    const { query } = req
    const { updateId } = query
    const taxObj = tax?.data.find((elem) => elem.id == updateId)
    res.status(200).json(taxObj)
}