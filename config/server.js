module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cors:{
    origin: "*",
    methods: ["GET", "POST"],
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8169ddccceeffb177584f04528cbeff7'),
    },
  },
  DEBUG: "*"
});
