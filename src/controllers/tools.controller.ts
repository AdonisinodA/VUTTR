import { Router } from 'express'

const router = Router()

router.get('/tools', (req, res) => {
  console.log(req.params, 'params')
  console.log(req.query, 'query')
  res.send('post')
})
router.post('/tools', (req, res) => {
  console.log(req.params, 'params')
  console.log(req.query, 'query')
  res.send('post')
})
router.delete('/tools', (req, res) => res.send('hello world'))

export default router
