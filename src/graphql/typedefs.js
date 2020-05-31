"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
    type Booking{
        id:ID!,
        listing :Listing!
        tenant: User!,
        checkIn: String!,
        checkOut : String!
    }
    type Bookings {
        total : Int!
        result : [Booking!]!
    }
    type Listings {
        total : Int!,
        result : [Listing!]!
    }

    enum ListingType{
        APARTMENT
        HOUSE
    }
    type Listing {
        id:ID!,
        title : String!,
        description : String!,
        image : String!,
        host : User!,
        type: ListingType!
        address : String!,
        city : String!,
        bookings(limit : Int!, page:Int!) : Bookings,
        bookingsIndex : String!,
        price: Int!,
        numOfGuests : Int!
    }
    type User {
        id:ID!,
        name : String!,
        avatar : String!,
        hasWallet : Boolean!,
        income : Int,
        bookings(limit : Int!, page:Int!) : Bookings,
        listings(limit : Int!, page:Int!) : Listings!
    }
    type Viewer{
        id:ID
        token: String
        avatar: String
        hasWallet: Boolean
        didRequest:Boolean!
    }
    type Query {
        authUrl:String!,
        user(id:ID!) : User!
    }
    input LogInInput {
        code: String!
    }
    type Mutation {
      logIn(input:LogInInput):Viewer!
      logOut : Viewer!
    }
`;
