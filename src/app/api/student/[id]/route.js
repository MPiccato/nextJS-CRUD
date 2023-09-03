import connectDB from "@/lib/db";
import { studentModel } from "@/models/Student";
import { NextResponse } from "next/server";

//Mostrar un documento

export const GET = async (req, { params }) => {
    await connectDB();
    const id = params.id
    try {
        const result = await studentModel.findById(id)
        return NextResponse.json({ data: result }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }

}

export const DELETE = async (req, { params }) => {
    await connectDB();
    const id = params.id;
    try {
        const result = await studentModel.findByIdAndDelete(id)
        if (!result) {
            return NextResponse.json({ message: `Document with ID: ${id} is not found` }, { status: 404 })

        }
        return NextResponse.json({ data: result }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })

    }
};

export const PUT = async (req, { params }) => {
    await connectDB()
    const id = params.id
    const body = await req.json()
    try {
        const result = await studentModel.findByIdAndUpdate(id, { $set: { ...body } }, { new: true })
        if (!result) {
            return NextResponse.json({ message: `Documento no actualizado con ID: ${id}` }, { status: 404 })
        }
        return NextResponse.json({ data: result }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }
}