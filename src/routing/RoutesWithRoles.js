export const commonRoutes = ["/settings"];
export const VALID_ROUTES_BY_ROLE = {
  admin: {
    paths: [
      "/admin/dashboard",
      "/admin/home",
      "/admin/users",
      "/admin/user-details/:userId",
      "/admin/packages",
      "/admin/add/package",
      "/admin/packages/:packageId",
      "/admin/voices",
      "/admin/voices/details",
      "/admin/payments",

      ...commonRoutes,
    ], // these are the routes assigned to admin
    landingUrl: "/admin/users", // admin landingUrl
    redirectUrl: "/access-denied", // admin will redirect to this Url If he will try to access route of Other User/Role
    signInUrl: "/signIn", // admin login Url/Route
  },
  client: {
    paths: [
      "/client/dashboard",
      "/client/package",
      "/client/home",
      ...commonRoutes,
    ], // these are the routes assigned to client
    landingUrl: "/client/home", // client landingUrl
    redirectUrl: "/access-denied", // client will redirect to this Url If he will try to access route of Other User/Role
    signInUrl: "/signIn", // client login Url/Route
  },
};
