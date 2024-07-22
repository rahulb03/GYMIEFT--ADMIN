import order from './order.json'

export const config = {
    api: {
        responseLimit: '8mb',
    },
}

export default function handler(req, res) {
    res.status(200).json(order)
}