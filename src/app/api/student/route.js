import connectDB from "@/lib/db";
import { NextResponse } from "next/server";
import { studentModel } from "@/models/Student";

export const GET = async () => {
    await connectDB()
    try {
        const result = await studentModel.find({})
        return NextResponse.json({ data: result }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }


};

export const POST = async (req, res) => {
    await connectDB()
    try {
        const body = await req.json()
        const newStudent = await studentModel.create(body)
        return NextResponse.json({ data: newStudent }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }

}