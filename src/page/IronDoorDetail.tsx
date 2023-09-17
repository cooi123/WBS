import {ProductDetail} from "../types/types";

export function WroughIronDoorDetailPage({details}: {details: ProductDetail}) {
  return (
    <div className="container mx-auto px-4">
      {/* Introduction about Wrought Iron Doors */}
      <div className="mt-8">
        <div className="mb-12 bg-gray-50 p-6 rounded-md shadow-sm">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Wrought Iron Doors
          </h1>
          <p className="text-gray-700 text-lg mb-4">
            {details.introDescription}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {details.introImages.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`Intro Image ${idx}`}
              className="w-full h-auto rounded shadow"
            />
          ))}
        </div>
      </div>
      {/* Features Section */}
      <div className="mt-8">
        <div className="mb-12 bg-gray-50 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-bold mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {details.features.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                {feature.icon && (
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    className="w-10 h-10"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Internal Structure & Lock Mechanism */}
        <div className="mt-8">
          <div className="mb-12 bg-gray-50 p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-bold mb-4">Internal Structure</h2>
            <img
              src={details.internalStructureImage}
              alt="Internal Structure"
              className="w-full h-auto mb-4 rounded shadow"
            />
            <p>{details.internalStructureDescription}</p>
          </div>
        </div>

        {/* Locking Mechanism Section */}
        <div className="mt-8">
          <div className="mb-12 bg-gray-50 p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-bold mb-4">Locking Mechanism</h2>

            <p className="mb-4">{details.lockingMechanismDescription}</p>
            {details.isSmartLockCompatible && (
              <div className="mt-8 bg-green-100 p-4 rounded border border-green-300">
                <h3 className="text-lg font-semibold mb-2">
                  Smart Lock Compatibility
                </h3>
                <p>This product is compatible with our smart locks.</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {details.lockingMechanismImages.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`Locking Mechanism Image ${idx}`}
                  className="w-full h-auto rounded shadow"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Made Option Announcement */}
      <div className="mt-8">
        <div className="mb-12 bg-gray-50 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-bold mb-4">Custom Made Options</h2>
          <p>
            We offer various customization options for your door. Choose from
            different glasses, railings, and dimensions to get the perfect door
            for your needs.
          </p>
        </div>
      </div>

      {/* Customization Options */}
      <div className="mb-12 bg-gray-50 p-6 rounded-md shadow-sm">
        <div className="grid grid-cols-2 gap-4 mt-8">
          {/* Glass Options */}
          <div>
            <h2 className="text-xl font-bold mb-4">Glass Options</h2>
            {details.glasses.map((glass) => (
              <div key={glass.type} className="flex items-center mb-2">
                <img
                  src={glass.imageSrc}
                  alt={glass.type}
                  className="w-16 h-16 rounded mr-4"
                />
                <span className="text-lg">{glass.type}</span>
              </div>
            ))}
          </div>

          {/* Railing Pattern */}
          <div>
            <h2 className="text-xl font-bold mb-4">Railing Pattern</h2>
            <p>{details.railingPattern}</p>
          </div>
        </div>
      </div>

      {/* Available Dimensions Section */}
      <div className="mt-8">
        <div className="mb-12 bg-gray-50 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-bold mb-4">Available Dimensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
            {details.dimensions.map((dim, idx) => (
              <div
                key={idx}
                className="border p-4 rounded shadow-md flex items-center justify-center text-center"
              >
                <span className="text-lg font-semibold">
                  {dim.height}h x {dim.width}w
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-blue-600 cursor-pointer hover:underline">
            Contact Us for custom size
          </div>
        </div>
      </div>

      {/* Smart Lock Compatibility */}

      {/* Sold Doors Gallery */}
      <div className="mt-8">
        <div className="mb-12 bg-gray-50 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-bold mb-4">Doors We've Made</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {details.soldDoorsImages.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`Door ${idx}`}
                className="w-full h-auto rounded shadow"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
