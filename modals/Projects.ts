import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    userId: { type: String, required: true },
    apiKey: { type: String, required: true, unique: true },
    allowedDomains: { type: [String], default: [] },
    smtpSettings: {
        host: { type: String },
        port: { type: Number },
        secure: { type: Boolean },
        username: { type: String },
        password: { type: String },
        fromEmail: { type: String },
        toEmail: { type: String },
    },
    formSchema: [{
        id: { type: String, required: true },
        label: { type: String, required: true },
        type: { type: String, required: true, enum: ["text", "email", "number", "textarea", "checkbox", "select"] },
        required: { type: Boolean, default: false },
        options: { type: [String] },
        placeholder: { type: String },
    }],
    isActive: { type: Boolean, default: true },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);