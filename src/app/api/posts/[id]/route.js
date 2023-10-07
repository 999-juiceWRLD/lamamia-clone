import { NextResponse } from "next/server"
import connectDB from "@/utils/db";
import Post from "@/app/models/Post";

export const GET = async (request, { params }) => {
    
    const { id } = params;

    // connect
    try {
        await connectDB();
        const post = await Post.findById(id);
        // console.log('ayo nothin here probably')
        return new NextResponse(JSON.stringify(post), { status: 200 })
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });

    }
}

export const DELETE = async (request, { params }) => {
    
    const { id } = params;

    // connect
    try {
        await connectDB();
        const post = await Post.findByIdAndDelete(id);
        // console.log('ayo nothin here probably')
        return new NextResponse("Post deleted successfully.", { status: 200 })
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });

    }
}