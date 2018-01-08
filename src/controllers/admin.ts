import { Request, Response } from "express";
import { default as User, UserModel, AuthToken } from "../models/User";
import { default as Role, RoleModel } from "../models/Role";
import { any } from "bluebird";

/**
 * GET /contact
 * Contact form page.
 */
export let getAdminTool = (req: Request, res: Response) => {
    Role.find((err, roles: Array<RoleModel>) => {
        res.render("admin", {
            title: "Admin",
            roles : roles.filter(role => role.userId != req.user.id)
        });
    });
};

/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */
export let postUpdateRoleAssignment = (req: Request, res: Response) => {
    const errors = req.validationErrors();
    if (errors) {
        req.flash("errors", errors);
        return res.redirect("/admin");
    }
    const newRA: any = {};

    newRA["assignment.admin"] = (req.body.admin) ? true : false;
    newRA["assignment.client"] = (req.body.client) ? true : false;
    newRA["assignment.office"] = (req.body.office) ? true : false;
    newRA["assignment.retail"] = (req.body.retail) ? true : false;

    Role.findOneAndUpdate(
        {userId: req.body.userId},
        {$set: newRA},
        (err, doc: RoleModel) => {
            if (doc) {
                console.log(doc.userName);
            }
        }
    );
    return res.redirect("/admin");
};
