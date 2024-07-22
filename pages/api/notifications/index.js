import notification from './notification.json'
export default function handler(req, res) {
    res.status(200).json(notification)
}