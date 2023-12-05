import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("silverSitting");
  let url = req.url;

  if (!verify && url.includes("/profile")) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_MAIN_URL}/login`);
  }

  if (verify && (url.includes("/register") || url.includes("/login"))) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_MAIN_URL}/`);
  }
}
