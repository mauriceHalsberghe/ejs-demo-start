import {person} from "../data/data.js"
import {navItems} from "../data/data.js"

export const home = (req, res) => {
    res.render("home", {
        title: "dinos around the world",
        message: "welcome to the world of dinos",
        navItems,
    });
};

export const about = (req, res) => {
    res.render("default", {
        title: "about us",
        message: "we lov dinos",
        team: ["sigmasaurus", "goon-rex", "muntosaurus, "],
        navItems,
    });
};

export const contact = (req, res) => {
    res.render("contact", {
        title: "contact",
        message: "contact us at dino@gmail.com",
        person,
        navItems,
    });
};

export const privacy = (req, res) => {
    res.render("default", {
        title: "privacy policy",
        message: "copyright dinocorp",
        team: false,
        navItems,
    });
};