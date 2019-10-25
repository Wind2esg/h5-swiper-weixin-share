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
  debug?: boolean;
  contents: Array<Array<any>>;
  wechatServiceUrl: string,
  wechatServiceParams: any,
  shareTitle: string;
  shareDescription: string;
  shareImgSrc: string;
  shareLink: string;
  preload?: boolean;
}

interface counter{
  num: number;
}

// #App component
export default class App extends React.Component<{}, AppState>{
    constructor(props: any){
      super(props);

      projects.debug = projects.debug ? projects.debug : false;
      projects.preload = projects.preload ? projects.preload : true;
      this.state = projects;
    }

    componentDidMount(){
      let init = ()=>{
        // wechat share
        new WeixinShareLink(
          {
              debug: this.state.debug!,
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

      let imgPreload = (src: string, imgNum: counter)=>{
        let img: HTMLImageElement = new Image();
        imgNum.num++;
        img.src = src;
        console.log(`${img.src} preload starts`);
        img.onload = ()=>{
          imgNum.num--;
          console.log(`${img.src} preload done, ${imgNum.num} left`);
          if(imgNum.num === 0){
            console.log('all preload done, start now');
            this.setState({preload: false});
          init();

          }
        }
      }

      let getSrcFileType = (src: string)=>{
        return src.substr(src.length - 3, 3);
      }

      let pagePreload = (contents: Array<Array<any>>)=>{
        let imgNum: counter = { num : 0 };
        for(let slide of contents){
          for(let item of slide){
            if(item.props.src && (getSrcFileType(item.props.src) === "jpg" || getSrcFileType(item.props.src) === "png")){
              imgPreload(item.props.src, imgNum);
            }else if (item.props.srcs){
              for(let src of item.props.srcs){
                imgPreload(src, imgNum);
              }
            }
          }
        }
      }

      this.state.preload ? pagePreload(this.state.contents) : init();
      
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
        <Skeleton loading={this.state.preload} active={true} paragraph={{rows:15}}>
          <div className="wgswiper-container swiper-container" >
            <div className="swiper-wrapper" >
              { swiperSlide }
            </div>
          </div>
        </Skeleton>
      );
    }
}

