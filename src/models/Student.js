import mongoose from "mongoose";

/// creamos un Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "completa el nombre"]
    },
    age: {
        type: Number,
        required: [true, "completa tu edad"]
    },

},
    {
        timestamps: true,
        versionKey: false
    }
)

// Creamos el modelo a partir del Schema

export const studentModel = mongoose?.models?.Student || mongoose.model("Student", studentSchema)