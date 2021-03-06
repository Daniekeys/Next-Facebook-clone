import NextAuth from "next-auth"


import GoogleProvider from "next-auth/providers/google";
export default NextAuth({
  // Configure one or more authentication providers FPR USE
 
  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code"
      //   }
      // }
    })
  ],
  // jwt: {
  //   encryption:true,
  // },
//   
})