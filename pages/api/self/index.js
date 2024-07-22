import account from './account.json'
export default function handler(req, res) {
    res.status(200).json(account)
}