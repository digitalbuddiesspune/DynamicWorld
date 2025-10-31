import express from 'express'
import { getAllOnlineUniversitiesV2, insertManyUniversitiesV2, getUniversityByIdV2, getSelectedUniversityFieldsV2, getSingleUniversity } from '../controller/onlineUniversityControllerV2.js';
export const onlineUniversityRouterV2 = express.Router();
onlineUniversityRouterV2.route('/createOnlineUniversitiesV2').post(insertManyUniversitiesV2);
onlineUniversityRouterV2.route('/onlineUniversitiesV2').get(getAllOnlineUniversitiesV2);
onlineUniversityRouterV2.route('/onlineUniversityV2').get(getUniversityByIdV2);
onlineUniversityRouterV2.route('/selectedOnlineUniversityFieldsV2').get(getSelectedUniversityFieldsV2);
onlineUniversityRouterV2.route('/university/:slug').get(getSingleUniversity);
