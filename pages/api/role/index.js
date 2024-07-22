import role from './role.json'
export default function handler(req, res) {
    res.status(200).json(role)
}