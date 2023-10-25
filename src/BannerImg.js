import React from 'react';

function BannerImg(props) {
    let {bgurl} = props;
    console.log("프롭스", bgurl);

  return (
    <img
      className="d-block w-100 carouselIMG"
      src={bgurl} // 이미지 URL을 props로 받아옴
      alt="Banner"
    />
  );
}

export default BannerImg;