import { Router } from 'express';
import { 
    GenerateStatus, 
    TestingStatus,
    ChangeDeleteCtrl,
    ChangeIgnoreCtrl,
    ChangeBlokedCtrl,
    ChangePublishedCtrl
} from '../controllers/status.controller';

const router = Router();

router.get('/', TestingStatus);
router.put('/delete/:id', ChangeDeleteCtrl);
router.put('/ignore/:id', ChangeIgnoreCtrl);
router.put('/bloked/:id', ChangeBlokedCtrl);
router.put('/published/:id', ChangePublishedCtrl);

export { router };