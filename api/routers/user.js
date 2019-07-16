import router from "./index";
import base from "./base";
import * as userController from "./../controllers/user";

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.post('/users/create', userController.createUser);
router.put('/users/:id', base.protectRoute, userController.updateUser);

export default router;