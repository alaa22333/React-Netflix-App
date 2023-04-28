import React from "react";
import Slider from "react-slick";
const Videos = ({ results, loading }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  if (results && results.length === 1) {
    return (
      <div className={`slider-container  md:px-5   `}>
        <h1 className={`title mb-32 mt-20 md:my-32  `}>Official Videos</h1>

        <div className="w-full ">
          <div className="w-full max-h-full  h-96 ">
            <iframe
              className={`w-full h-full -mt-20 `}
              src={` https://www.youtube-nocookie.com/embed/${results[0]?.key}?rel=0&vq=hd360p60`}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-center -mb-40  md:text-xl text-sm">
            {results[0]?.name}
          </p>
        </div>
      </div>
    );
  }

  return (
    results?.length && (
      <div className={`slider-container `}>
        <h1 className={`title pl-5  `}>Official Videos</h1>

        <Slider
          className={` flex container mx-auto md:px-1 items-center `}
          {...settings}
        >
          {results?.map((video) => {
            const { key, name } = video;

            return (
              <div key={key} className="w-full ">
                <div className="w-full max-h-full  h-96 ">
                  <iframe
                    className={`w-full h-full   `}
                    src={` https://www.youtube-nocookie.com/embed/${key}?rel=0&vq=hd720p60`}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>

                <p className="text-center line-clamp-1 hover:line-clamp-none pt-3 pb-1 mb-14 md:text-xl  text-sm">
                  {name}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
    )
  );
};

export default Videos;
