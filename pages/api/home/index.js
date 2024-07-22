import paris from './paris.json'
import berlin from './berlin.json'
import madrid from './madrid.json'
import osaka from './osaka.json'
import denver from './denver.json'
import tokyo from './tokyo.json'
import rome from './rome.json'
export default function handler(req, res) {
    const { query } = req
    const { slug } = query
    const homeObj = {
        paris,
        berlin,
        madrid,
        osaka,
        denver,
        tokyo,
        rome
    }
    res.status(200).json(homeObj[slug])
}