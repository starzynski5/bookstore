import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {

    const cookieStore = cookies();

    const isAuth = cookieStore.get("isLoggedIn")?.value;

    console.log("auth status:" + isAuth)
    
    //Not authenticated users trying to access only-authed content
    if (isAuth !== "true" && req.nextUrl.pathname.startsWith("/dashboard")){
        return NextResponse.redirect(new URL("/sign-in", req.url));
    } 

    //Authenticated users trying to access only-unauthed content
    if (isAuth === "true" && req.nextUrl.pathname.match("/sign-in")){
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    if (isAuth === "true" && req.nextUrl.pathname.match("/sign-up")){
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }
}