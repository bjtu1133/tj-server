import * as mongoose from "mongoose";

export type StorageModel = mongoose.Document & {
    pno: string,
    dot: string,
    loc: string,
    amount: number
};

const storageSchema = new mongoose.Schema ({
    storageId: { type: String, unique: true },
    pno: String,
    dot: String,
    loc: String,
    amount: Number
}, { timestamps: true });

const Storage = mongoose.model("Storage", storageSchema);
export default Storage;
