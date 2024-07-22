import user from './user.json'
export default function handler(req, res) {
    const { query } = req
    const { updateId } = query
    const userObj = user?.data.find((elem) => elem.id == updateId)
    res.status(200).json(userObj)
}