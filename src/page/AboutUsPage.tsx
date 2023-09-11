import React from "react";
import GoogleMap from "../components/GoogleMapEmdeing";
const aboutUsSection = [
  {
    title:
      "Welcome to Mount Waverly Building Supply – We do everything construction.",
    content: `     At Mount Waverly Building Supply, we take immense pride in being a
        leading provider of top-quality construction materials. We stand as a
        premier provider of superior construction materials, specializing in a
        range of exceptional products including wrought iron doors, internal
        doors, skirting, architrave, and cabinetry. With an unwavering
        dedication to quality and an unrelenting passion for enhancing
        architectural aesthetics`,
  },
  {
    title: "Unparalleled Quality",
    content:
      "Central to our mission is an unwavering commitment to unrivaled quality. From our exquisite wrought iron doors to our meticulously crafted internal doors, skirting, architrave, and cabinetry, each product embodies the perfect fusion of aesthetics and durability. Crafted from the finest materials, every item undergoes rigorous quality assessment to ensure it upholds the highest standards of longevity and beauty. We firmly believe that your space deserves the utmost attention to detail, and our comprehensive range of products reflects our dedication to excellence.",
  },
  {
    title: "Customized Solutions",
    content:
      "We understand the unique requirements of every project. To cater to your specific needs, we provide customized solutions that extend across our entire product range. Whether it's a bespoke wrought iron door, a personalized internal door design, tailored skirting and architrave options, or custom cabinetry, our skilled craftsmen collaborate with you to bring your design preferences to life. With an unwavering eye for detail, we transform your concepts into tangible masterpieces that redefine spaces and elevate your surroundings.",
  },
  {
    title: "Exceptional Customer Service",
    content:
      "Mount Waverly Building Supply's dedication goes beyond products, extending to exceptional customer service. We pride ourselves on guiding you throughout the entire process. Our knowledgeable team is readily available to assist you in selecting the perfect wrought iron door or any of our other premium products. From answering queries to ensuring a seamless experience, we're here for you.",
  },
];

function AboutUs() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 max-w-screen-lg overflow-hidden">
      <h1 className="text-4xl font-bold mb-2">About Us</h1>
      {aboutUsSection.map((section, index) => (
        <Section key={index} title={section.title} content={section.content} />
      ))}
    </div>
  );
}

function Section({title, content}: {title: string; content: string}) {
  return (
    <div className="mb-12 bg-gray-50 p-6 rounded-md shadow-sm">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default AboutUs;
