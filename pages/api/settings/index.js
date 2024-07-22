import setting from './setting.json'
export default function handler(req, res) {
    res.status(200).json(setting)
}