import modules from './module.json'
export default function handler(req, res) {
    res.status(200).json(modules)
}