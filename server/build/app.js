"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require('dotenv').config();
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const error_1 = require("./middleware/error");
const user_route_1 = __importDefault(require("./routes/user.route"));
const course_route_1 = __importDefault(require("./routes/course.route"));
const order_route_1 = __importDefault(require("./routes/order.route"));
const notification_route_1 = __importDefault(require("./routes/notification.route"));
const analytics_route_1 = __importDefault(require("./routes/analytics.route"));
const layout_route_1 = __importDefault(require("./routes/layout.route"));
const express_rate_limit_1 = require("express-rate-limit");
//body parser
exports.app.use(express_1.default.json({ limit: "50mb" }));
exports.app.use(express_1.default.urlencoded({ extended: true }));
//cookie parser
exports.app.use((0, cookie_parser_1.default)());
// app.use(cookies());
//cors => cross resource sharing
exports.app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Redis, Memcached, etc. See below.
});
// routes
exports.app.use('/api/v1/', user_route_1.default);
exports.app.use('/api/v1/', course_route_1.default);
exports.app.use('/api/v1/', order_route_1.default);
exports.app.use('/api/v1/', notification_route_1.default);
exports.app.use('/api/v1/', analytics_route_1.default);
exports.app.use('/api/v1/', layout_route_1.default);
exports.app.get('/test', (req, res, next) => {
    res.status(200).json({
        message: "test route",
        success: true
    });
});
//unknown route
exports.app.all('*', (req, res, next) => {
    const err = new Error(`Route' ${req.originalUrl} not found`);
    err.statusCode = 404;
    next(err);
});
//middleware
exports.app.use(limiter);
exports.app.use(error_1.ErrorMiddleware);
