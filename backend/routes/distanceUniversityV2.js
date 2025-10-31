import express from 'express';
import { getAllDistanceUniversitiesV2, getDistanceUniversityByIdV2, getSelectedUniversityFieldsDistanceV2, getSingleDistanceUniversity, insertManyDistanceUniversitiesV2 } from '../controller/distanceUniversityControllerV2.js';
export const distanceUniversityRouterV2 = express.Router();
distanceUniversityRouterV2.route('/createDistanceUniversitiesV2').post(insertManyDistanceUniversitiesV2);
distanceUniversityRouterV2.route('/getAllUniversitiesV2').get(getAllDistanceUniversitiesV2);
distanceUniversityRouterV2.route('/distanceUniversityV2').get(getDistanceUniversityByIdV2);
distanceUniversityRouterV2.route('/selectedV2').get(getSelectedUniversityFieldsDistanceV2);
distanceUniversityRouterV2.route('/distanceUniversity/:slug').get(getSingleDistanceUniversity);
