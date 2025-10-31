import express from "express";
import { getSingleDistanceUniversity } from "../controller/distanceUniversityControllerV2.js";
import { addToRegularEducation, getAllFromRegularEdu, getOne, getSingleRegularUniversity } from "../controller/regularEducation.js";
const regularEducationRouter = express.Router();
regularEducationRouter.route('/regular-list').get(getAllFromRegularEdu);
regularEducationRouter.route('/regular').get(getOne);
regularEducationRouter.route('/add-to-regular').post(addToRegularEducation)
regularEducationRouter.route('/regularUniversity/:slug').get(getSingleRegularUniversity)
export default regularEducationRouter;