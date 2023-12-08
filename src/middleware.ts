export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/profile/",
    "/profile/me/",
    "/profile/mylectures/",
    "/profile/logout/",
    "/lecture/pay/",
    "/lecture/quiz",
  ],
};
