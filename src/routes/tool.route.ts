import { Router } from 'express'
import { ToolController } from '../controller/tool.controller'

const router = Router()
const RouteBase = '/tools'

router.get(`${RouteBase}`, ToolController.getTool)
router.post(`${RouteBase}`, ToolController.createTool)
router.delete(`${RouteBase}/:id`, ToolController.deleteTool)

export default router
