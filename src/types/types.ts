export type ProductInfo = {
    imgSrc: string,
    name: string,
    description: string,
    category: string,
    link: string,
}

type GlassType = "coated" | "aquatex" | "frosted" | "tempered";
type Dimension = {
    height: number;
    width: number;
    label?: string; // Optionally, if you want to provide a custom label for any dimension
};
export type ProductDetail = {
    introDescription: string;       // Description about what a wrought iron door is
    introImages: string[];         // Images for wrought iron door introduction
    dimensions: Dimension[];
    features: {
        title: string;
        description: string;
        icon?: string; // Optional icon for each feature, you can exclude if you don't have icons
    }[];
    glasses: {
        type: GlassType;
        imageSrc: string;
    }[];
    railingPattern: string;
    internalStructureDescription: string;
    internalStructureImage: string;
    lockingMechanismDescription: string;
    lockingMechanismImages: string[];
    isSmartLockCompatible: boolean;
    soldDoorsImages: string[];
};
