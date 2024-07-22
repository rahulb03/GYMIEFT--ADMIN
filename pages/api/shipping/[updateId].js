import shipping from './shipping.json'
export default function handler(req, res) {
    const { query } = req
    const { updateId } = query
    const shippingObj = shipping?.find((elem) => elem.id == updateId)
    res.status(200).json(shippingObj)
}