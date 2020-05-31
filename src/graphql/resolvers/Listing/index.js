"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listingResolvers = {
    Listing: {
        id: (listing) => {
            return listing._id.toString();
        }
    }
    // Query: {
    //     listings: async ( _root: undefined, _args:{}, { db }:{ db: Database } ): Promise<Listing[]> => {
    //         return await db.listings.find({}).toArray();
    //     }
    // },
    // Mutation: {
    //     deleteListing: async ( _root: undefined, {id}:{id:string}, { db }:{ db: Database } ): Promise<Listing> => {
    //         const deletedRes = await db.listings.findOneAndDelete({
    //             _id: new ObjectID(id)
    //         })   
    //         if(!deletedRes.value){
    //             throw new Error("Unable to delete the list!!")
    //         }
    //         return deletedRes.value;
    //     }
    // },
    // listing : {
    //     id:(listing: Listing) : string => listing._id.toString()
    // }
};
