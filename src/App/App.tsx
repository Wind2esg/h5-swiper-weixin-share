/**
 * App.tsx
 * 
 * @author wind2esg
 * @date 20191011
 * @update 20191015
 * 
 * #def   define interface, type guard function
 * #App   component, render doms, wechat share and swiper init
 */

import React from 'react';
import './App.css';
import { WeixinShareLink } from 'weixin-sharelink';
import Wgswiper from 'wgswiper';
import { projects } from '../Projects/Projects';
import { Skeleton } from 'antd';

// #def
export interface AppState{
  debug: boolean;
  contents: Array<Array<any>>;
  wechatServiceUrl: string,
  wechatServiceParams: any,
  shareTitle: string;
  shareDescription: string;
  shareImgSrc: string;
  shareLink: string;
  loading: boolean;
}

// #App component
export default class App extends React.Component<{}, AppState>{
    state = projects;
    
    componentDidMount(){
      let preloadLength: number = 0;
      this.state.contents.map(slider=>{
        slider.map(item=>{
          if(item.type.name === 'SImg'){
            preloadLength++;
            let img = new Image();
            img.src = item.props.src;
            console.log(preloadLength);
            console.log(img.src);
            img.onload = ()=>{
              preloadLength--;
              if(preloadLength === 0){
                console.log('preload done');
                this.setState({loading: false});
                // wechat share
                new WeixinShareLink(
                  {
                      debug: this.state.debug,
                      title: this.state.shareTitle,
                      desc: this.state.shareDescription,
                      link: this.state.shareLink,
                      imgUrl: this.state.shareImgSrc
                  },
                  {
                      url: this.state.wechatServiceUrl,
                      params: this.state.wechatServiceParams
                  },
                  'json'
              )

              // swiper init
              let swiper = new Wgswiper().getSwiper();

              // deal with video
              swiper.on('slideChange', ()=>{
                for (let video of (document.getElementsByTagName('video') as any)) {
                  video.pause();
                }
              })
              }
            }
          }
          return <div />;
        });
        return <div />;
      });

      // // wechat share
      // new WeixinShareLink(
      //     {
      //         debug: this.state.debug,
      //         title: this.state.shareTitle,
      //         desc: this.state.shareDescription,
      //         link: this.state.shareLink,
      //         imgUrl: this.state.shareImgSrc
      //     },
      //     {
      //         url: this.state.wechatServiceUrl,
      //         params: this.state.wechatServiceParams
      //     },
      //     'json'
      // )

      // // swiper init
      // let swiper = new Wgswiper().getSwiper();

      // // deal with video
      // swiper.on('slideChange', ()=>{
      //   for (let video of (document.getElementsByTagName('video') as any)) {
      //     video.pause();
      //   }
      // })

    }
    render(){
      let swiperSlide = this.state.contents.map((slider, index)=>
        (<div className="swiper-slide" key={index}>
          <div className="wgswiper-slide-height">
            {slider.map((item, index)=>(
                <React.Fragment key={index}>
                  {item}
                </React.Fragment>
            ))}
          </div>
        </div>)
      );
      return (
        <Skeleton loading={this.state.loading}>
          <div className="wgswiper-container swiper-container" >
            <div className="swiper-wrapper" >
              { swiperSlide }
            </div>
          </div>
        </Skeleton>
      );
    }
}

