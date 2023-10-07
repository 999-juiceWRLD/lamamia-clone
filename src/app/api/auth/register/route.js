import User from "@/app/models/User";
import connectDB from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async request => {
    const { name, email, password } = await request.json();
    await connectDB();
    const hashedPassword = await bcrypt.hash(password, 6);
    try {
        const newUser = await User.create({
            name, 
            email, 
            password: hashedPassword 
        });
        return new NextResponse("User has been created", {
            status: 201
        })
    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
}