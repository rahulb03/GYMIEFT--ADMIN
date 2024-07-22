import store from './store.json'
export default function handler(req, res) {
    const { query } = req
    const { updateId } = query
    const storeObj = store?.data.find((elem) => elem.id == updateId)
    res.status(200).json(storeObj)
}