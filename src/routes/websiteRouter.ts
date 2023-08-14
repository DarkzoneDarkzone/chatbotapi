import { Router } from 'express'
import { PostController } from '../controllers/PostController'

const router = Router()
const postController = new PostController()

router.get('/api/post', postController.OnGetAll)
router.post('/api/post/create_mock', postController.OnCreateMockDate)

export const websiteRouter = router