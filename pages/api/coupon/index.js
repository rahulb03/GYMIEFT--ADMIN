import coupon from './coupon.json'
export default function handler(req, res) {
    res.status(200).json(coupon)
}