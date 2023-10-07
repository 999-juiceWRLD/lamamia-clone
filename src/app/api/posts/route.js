import { NextResponse } from "next/server"
import connectDB from "@/utils/db";
import Post from "@/app/models/Post";

export const GET = async request => {
    
    const url = new URL(request.url);
    const username = url.searchParams.get('username');

    try {
        await connectDB();
        const posts = await Post.find(username && { username });
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
}

export const POST = async request => {
    const { title, desc, img, content, username } = await request.json();
    console.log('is this post working good');
    try {
        await connectDB();
        console.log('inside the bee');
        const newPost = await Post.create({
            title: title,
            desc: desc,
            image: img, 
            content: content,
            username: username
        });
        return new NextResponse('Post has been created', { status: 201 });
    } catch (err) {
        console.log('is this post working not good');
        console.log(err);
        return new NextResponse("Database Error", { status: 500 });
    }
}
