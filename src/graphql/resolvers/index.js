"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const User_1 = require("./User");
const Viewer_1 = require("./Viewer");
const Listing_1 = require("./Listing");
exports.resolvers = lodash_merge_1.default(Viewer_1.viewerResolvers, User_1.userResolvers, Listing_1.listingResolvers);
