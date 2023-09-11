import React from "react";

function AboutUs() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="italic text-lg">
          Welcome to Mount Waverly Building Supply – We do everything
          construction
        </p>
      </div>

      <div>
        <p className="mb-6">
          At Mount Waverly Building Supply, we take immense pride in being a
          leading provider of top-quality construction materials... (continue
          this as per your content)
        </p>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Unparalleled Quality</h3>
          <p>
            Central to our mission is an unwavering commitment... (continue this
            as per your content)
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Customized Solutions</h3>
          <p>
            We understand the unique requirements of every project... (continue
            this as per your content)
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">
            Exceptional Customer Service
          </h3>
          <p>
            Mount Waverly Building Supply's dedication goes beyond... (continue
            this as per your content)
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-4">
            If you have any questions or inquiries, feel free to get in touch
            with us. We're here to help!
          </p>

          <div className="mb-4">
            <p className="font-bold">Phone:</p> 0451548889
          </div>
          <div className="mb-4">
            <p className="font-bold">Email:</p> auswbs@gmail.com
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Visit Us</h3>
          <p className="mb-4">
            Experience the products we have firsthand... (continue this as per
            your content)
          </p>

          <iframe
            src="YOUR_MAPS_URL_HERE"
            width="800"
            height="600"
            className="border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
