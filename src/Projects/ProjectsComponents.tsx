/**
 * ProjectsComponents.tsx
 * 
 * @author wind2esg
 * @date 20191016
 * 
 * your components here
 * 
 * #SImg
 * #SVideoInline
 * #SVideo
 * #SCarousel
 */

import React from 'react';
import './ProjectsComponents.css';
import Swiper from 'swiper';

/**
 *  #SImg
 * 
 */ 
interface SImgProps{
    src: string;
    alt?: string;
}

export class SImg extends React.Component<SImgProps>{
    render(){
        return (
            <img src={this.props.src} alt={this.props.alt ? this.props.alt : ""}  />
        );
    }
}

/**
 *  #SVideoInline
 *  #SVideo
 */ 
interface SVideoProps{
    poster?: string;
    src: string;
    type?: string;
}

export class SVideo extends React.Component<SVideoProps>{
    render(){
        return (
            <>
                <video autoPlay controls poster={this.props.poster}>
                    <source src={this.props.src} type={this.props.type ? this.props.type : "video/mp4" } ></source>
                </video>
            </>
        );
    }
}

export class SVideoInline extends React.Component<SVideoProps>{
    render(){
        return (
            <>
                <video autoPlay controls playsInline webkit-playsinline poster={this.props.poster}>
                    <source src={this.props.src} type={this.props.type ? this.props.type : "video/mp4" } ></source>
                </video>
            </>
        );
    }
}

/**
 *  #SCarousel
 * 
 */ 
interface SCarouselProps{
    srcs: Array<string>;
    carouselClassName: string;
    pagination?: boolean;
    paginationClassName?: string;
}

export class SCarousel extends React.Component<SCarouselProps>{
    componentDidMount(){
        new Swiper(`.${this.props.carouselClassName}`, 
            this.props.pagination
            ?
            {
                pagination:{
                    el: `.${this.props.paginationClassName}`
                }
            }
            :
            {}
        );
        
    }

    render(){
        return(
            <div className={`swiper-container ${this.props.carouselClassName}`} >
                <div className="swiper-wrapper" >
                    {this.props.srcs.map((item, index)=>(
                        <div className="swiper-slide" key={index}>
                            <img src={item} alt="" />
                        </div>
                    ))}
                </div>
                { this.props.pagination && <div className={this.props.paginationClassName}></div> }
            </div>
        );
    }
}