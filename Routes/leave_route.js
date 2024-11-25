import express from 'express';
import varifyUser from '../Middleware/auth_middleware.js';
import { addLeave ,getLeave, getLeaveDetail, getLeaves,updateLeave} from '../Controller/leave_controller.js';


const router = express.Router();

router.post('/add',varifyUser,addLeave);
router.get('/detail/:id',varifyUser,getLeaveDetail);
router.get('/:id/:role',varifyUser,getLeave);


router.get('/',varifyUser,getLeaves);
router.put('/:id',varifyUser,updateLeave);



export default router;

