/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    mongodb_username: "yukari",
    mongodb_password: "81818181",
    mongodb_clustername: "cluster0",
    mongodb_database: "blog",
  },
};

module.exports = nextConfig;
