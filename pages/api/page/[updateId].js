import page from './page.json'
export default function handler(req, res) {
    const { query } = req
    const { updateId } = query
    const pageObj = page?.data.find((elem) => elem.id == updateId)
    res.status(200).json(pageObj)
}