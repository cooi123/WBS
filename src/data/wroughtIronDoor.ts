import { ProductDetail } from "../types/types";
export const wroughtIronDoorDetail: ProductDetail = {
    introDescription:
        "Experience unmatched resilience with our wrought iron doors. Crafted to endure and built to last, these doors are a testament to longevity. Elevate your property's security to a new level, as wrought iron's formidable strength creates a robust barrier that stands the test of time. Choosing an iron door not only fortifies your space against intrusion but also grants you the peace of mind you deserve. Invest in your home's safety and style by embracing the unmatched protection of our wrought iron doors.",
    introImages: [
        "./asserts/WroughIronDoor/prod-20-700x778.png",
        "./asserts/WroughIronDoor/prod-21-700x778.png",
    ],
    dimensions: [
        { height: 2.4, width: 1.72 },
        { height: 2.4, width: 1.8 },
        { height: 2.6, width: 1.72 },
        { height: 2.7, width: 1.8 },
        { height: 2.7, width: 1.98 },
    ],
    features: [
        {
            title: "Double glazed glass",
            description:
                "This door is made with 12mm thick steel plate. It is strong and durable.",
        },
    ],
    glasses: [
        {
            type: "coated",
            imageSrc: "./asserts/WroughIronDoor/glass/coatedglass.jpg",
        },
        {
            type: "aquatex",
            imageSrc: "./asserts/WroughIronDoor/glass/Aquatexglass.jpg",
        },
        {
            type: "frosted",
            imageSrc: "./asserts/WroughIronDoor/glass/frostedglass.jpg",
        },
        {
            type: "tempered",
            imageSrc: "./asserts/WroughIronDoor/glass/temperedglass.jpg",
        },
    ],
    railingPattern: "Single",
    internalStructureDescription:
        "This door is made with 12mm thick steel plate. It is strong and durable.",
    internalStructureImage: "./asserts/WroughIronDoor/internalStructure.jpg",

    lockingMechanismDescription:
        "This door is equipped with a 3-point locking mechanism. It is strong and durable.",
    lockingMechanismImages: [
        "./asserts/WroughIronDoor/lockingMechanism.jpg",
        "./asserts/WroughIronDoor/lockWithDoor.jpg",
        "./asserts/WroughIronDoor/smartLockWithDoor.jpg",
    ],
    isSmartLockCompatible: true,
    soldDoorsImages: [
        "./asserts/WroughIronDoor/doorMade/door1.jpg",
        "./asserts/WroughIronDoor/doorMade/door2.jpg",
        "./asserts/WroughIronDoor/doorMade/door3.jpg",
        "./asserts/WroughIronDoor/doorMade/door4.jpg",
    ],
};