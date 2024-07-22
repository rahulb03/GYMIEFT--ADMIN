import faq from './faq.json'
export default function handler(req, res) {
    const { query } = req
    const { updateId } = query
    const faqObj = faq?.data.find((elem) => elem.id == updateId)
    res.status(200).json(faqObj)
}