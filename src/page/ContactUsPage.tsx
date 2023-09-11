import GoogleMap from "../components/GoogleMapEmdeing";
function ContactUs() {
  return (
    <div className="mb-12 bg-gray-50 p-6 rounded-md shadow-sm">
      <h4 className="text-2xl font-semibold mb-4">Contact Us</h4>
      <p>
        If you have any questions or inquiries, feel free to get in touch with
        us. We're here to help!
      </p>
      <div className="mt-4 space-y-2">
        <div className="flex items-center">
          <span className="font-bold w-20">Phone:</span> 0451548889
        </div>
        <div className="flex items-center">
          <span className="font-bold w-20">Email:</span> auswbs@gmail.com
        </div>
      </div>
    </div>
  );
}

function VisitUs() {
  return (
    <div className="mb-12 bg-gray-50 p-6 rounded-md shadow-sm">
      <h3 className="text-2xl font-semibold mb-4">Visit Us</h3>
      <p>
        Experience the products we have firsthand. We invite you to visit our
        showroom, where you can explore our diverse collection, witness the
        craftsmanship up close, and gain inspiration for your projects. Our
        experts are on hand to provide insights, answer questions, and guide you
        towards the perfect choice.
      </p>
      <GoogleMap />
    </div>
  );
}

export function ContactUsPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 max-w-screen-lg overflow-hidden">
      <ContactUs />
      <VisitUs />
    </div>
  );
}
