import React from "react";

const GoogleMap = () => {
  return (
    <div className="relative w-full h-0 overflow-hidden pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3148.5536701410942!2d145.1313353!3d-37.8941194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66bd66c4bc8ff%3A0x3d296969fbf4df9e!2sMount%20Waverley%20Building%20Supply!5e0!3m2!1sen!2sau!4v1693206286161!5m2!1sen!2sau"
        frameBorder="0"
        allowFullScreen={true}
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default GoogleMap;
