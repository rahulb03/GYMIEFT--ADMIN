import questions from './questions.json'
export default function handler(req, res) {
    res.status(200).json(questions)
}