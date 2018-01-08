import * as mongoose from "mongoose";

export type RoleModel = mongoose.Document & {
    userId: string,
    userName: string,
    userEmail: string,
    assignment: {
        admin: boolean,
        client: boolean,
        office: boolean,
        retail: boolean
    }
};

const roleSchema = new mongoose.Schema ({
    userId: { type: String, unique: true },
    userName: String,
    userEmail: String,
    assignment: {
        admin: Boolean,
        client: Boolean,
        office: Boolean,
        retail: Boolean
    }
}, { timestamps: true });

const Role = mongoose.model("Role", roleSchema);
export default Role;
