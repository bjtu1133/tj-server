import { Request, Response } from "express";
import { default as User, UserModel, AuthToken } from "../models/User";
import { default as Role, RoleModel } from "../models/Role";
import { default as Storage, StorageModel } from "../models/Storage";
import { any } from "bluebird";

export let getStorage = (req: Request, res: Response) => {
    res.send({text: "helloooo"});
};

export let updateStorage = (req: Request, res: Response) => {
    res.set("Access-Control-Allow-Origin", "*");
    const record = req.body;
    const storage = record.storage;
    Storage.findOneAndUpdate({
        pno: storage.pno,
        dot: storage.dot,
        loc: storage.loc
    },
    {$inc: {amount: storage.amount}},
    {upsert: true, new: true}
    ).then(data => {
        res.send(data);
    });
};