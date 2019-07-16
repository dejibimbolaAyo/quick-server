import router from "./router.js";
import base from "./_base";
import * as userController from "./../controllers/user";

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);

router.post('/users/create', userController.createUser);

router.put('/users/:id', base.protectRoute, userController.updateUser);

export default router;