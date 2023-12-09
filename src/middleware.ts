export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/profile/",
    "/profile/me/",
    "/profile/mycourses/",
    "/profile/logout/",
    "/course/pay/",
    "/course/quiz",
  ],
};
