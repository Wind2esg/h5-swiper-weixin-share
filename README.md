# H5-swiper-weixin-share
[![Build Status](https://travis-ci.org/Wind2esg/h5-swiper-weixin-share.svg?branch=master)](https://travis-ci.org/Wind2esg/h5-swiper-weixin-share)

This is a h5 template with auto-adoption vertical swiper and wechat sharelink features, based on create-react-app.

## Points
+ Focus on Projects/
+ Make your own components in ProjectsComponents.tsx
+ `slides` is an array of slide, the slide is an array of your components. Just act like the example. 
+ Fill in `projects` as need
+ It is hard when in wechat env. Pay attention on `SVideo` component. **ATTENTION!!!For prevent `touchmove` on poster causing page scrolling, set `.swiper-contianer` and related parents' css `height: 100%; overflow: hidden;`**.
  
Friend, u gd now!  
Fast and ez, saving time, saving life!

## Usage
Install  
`git clone https://github.com/wind2esg/h5-swiper-weixin-share`  

Enter the folder  
`npm i`  

Liveload dev  
`npm start`  

Build   
`npm build`  
Then deploy

## Build-in Components and props
+ `SImg`
  + `src`.
  + `alt`, optional.
+ `SVideo`
  + `src`.
  + `type`, optional, with default value `"video/mp4"` 
  + `inline`, when set to `false`, `playinline` and `webkit-playsinline` attributes would not be added to the video tag of the components.
+ `SCarousel`
  + `srcs`, an array of images' src in the carousel. 
  + `carouselClassName`, optional, with default value `"carousel"`, className of the carousel, used for initing the nested swiper. You **HAVE TO** set this if you had more than one carousel.
  + `pagination`, optional, when set to `true`, the carousel will have pagination indicator.
    + `paginationClassName`, optional, with default value `"swiper-pagination"`. Works **WHEN** `pagination` is true. like `carouselClassName` You **HAVE TO** set this if you had more than one carousel.

## link
Dependencies  

[微信官方 js sdk, commonjs, ts 版](https://github.com/Wind2esg/weixin-sdk-js)  
[分享给朋友，分享至朋友圈](https://github.com/wind2esg/weixin-sharelink)  
[自适应页内高度 + 翻页锁的 Swiper](https://github.com/wind2esg/wgswiper)

[wechat official js sdk for commonjs and ts](https://github.com/Wind2esg/weixin-sdk-js)  
[Share to friend and share to timeline](https://github.com/wind2esg/weixin-sharelink)  
[Self-adoption + slide lock, Swiper](https://github.com/wind2esg/wgswiper)  
