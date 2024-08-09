import { VALID_ROUTES_BY_ROLE } from "./RoutesWithRoles";

class AclService {
  constructor(role) {
    this.role = role; // role of user logged In
    this.userAccess = VALID_ROUTES_BY_ROLE[this.role]; // VALID_ROUTES_BY_ROLE.admin/user/client
  }
  get redirectUrl() {
    // if User want to access route of another Role
    return this.userAccess?.redirectUrl ?? "/not-found"; // if left side else right side
  }

  get landingPage() {
    // after login where user will navigate to
    return this.userAccess?.landingUrl ?? "/not-found"; // if landing page will present in given route then go to landing paager else go to /not-found route
  }

  hasPermission(path) {
    //  to check either user have permission or not
    return this.userAccess?.paths.includes(path); // checking if user has access to given route
  }
}

export default AclService;
