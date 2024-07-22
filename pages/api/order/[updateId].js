import order from './order.json'
export default function handler(req, res) {
    const { query } = req
    const { updateId } = query
    const orderObj = order?.data.find((elem) => elem.order_number == updateId)
    res.status(200).json(orderObj)
}