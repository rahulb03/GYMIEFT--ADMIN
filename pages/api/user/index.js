import user from './user.json'
export default function handler(req, res) {
    res.status(200).json(user)
}