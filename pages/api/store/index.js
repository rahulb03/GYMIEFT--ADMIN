import store from './store.json'
export default function handler(req, res) {
    res.status(200).json(store)
}