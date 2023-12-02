import { Router } from 'express'
import { ToolController } from '../controller/tool.controller'

const router = Router()
const RouteBase = '/tools'

router.get(`${RouteBase}`, ToolController.getTool)
router.post(`${RouteBase}`, (req, res) => {
  console.log(req.params, 'params')
  console.log(req.query, 'query')
  res.send('post')
})
router.delete(`${RouteBase}`, (req, res) => res.send('hello world'))

export default router
