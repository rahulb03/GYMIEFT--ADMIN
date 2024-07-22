import theme from './theme.json'
export default function handler(req, res) {
    res.status(200).json(theme)
}