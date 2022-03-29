const express = require("express");

const {userRouter,authUser} = require("./userRouter");
const listingRouter = require("./listingRouter");

const appRouter = express.Router();


appRouter.use("/api/user", userRouter);
appRouter.use("/api/listing", listingRouter);
appRouter.use("api/user/login",authUser);

module.exports = appRouter;