import product from './product.json'
export default function handler(req, res) {
    const { query } = req
    const { updateId } = query
    const productObj = product?.data.find((elem) => elem.id == updateId)
    res.status(200).json(productObj)
}