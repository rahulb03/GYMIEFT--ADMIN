import coupon from './coupon.json'
export default function handler(req, res) {
    const { query } = req
    const { updateId } = query
    const couponObj = coupon?.data?.find((elem) => elem.id == updateId)
    res.status(200).json(couponObj)
}