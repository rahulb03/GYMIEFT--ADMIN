import themeOptions from './themeOptions.json'
export default function handler(req, res) {
    res.status(200).json(themeOptions)
}