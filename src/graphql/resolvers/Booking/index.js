"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingResolvers = {
    Booking: {
        id: (booking) => {
            return booking._id.toString();
        },
        listing: (booking, _args, { db }) => {
            return db.listings.findOne({
                _id: booking._id
            });
        }
    }
};
