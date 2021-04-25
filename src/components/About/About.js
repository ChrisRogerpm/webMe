import React from 'react'
import { data } from '../../data/data'

export const About = () => {
    const information = data;
    return (
        <>
            {/* Home Page Top Part */}
            <div className="row">
                <div className=" col-xs-12 col-sm-12">
                    <div className="home-content">
                        <div className="row flex-v-align">
                            <div className="col-sm-12 col-md-5 col-lg-5">
                                <div className="home-photo">
                                    <div className="hp-inner" style={{ backgroundImage: 'url(img/main_me_photo.jpg)' }}>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-7 col-lg-7">
                                <div className="home-text hp-left">
                                    <div className="owl-carousel text-rotation">
                                        {
                                            information.tags.map(tag => (
                                                <div className="item" key={tag.id}>
                                                    <h4>{tag.name}</h4>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <h1>{information.title}</h1>
                                    <p>{information.description}</p>
                                    {/* <div className="home-buttons">
                                        <a href="/" target="_blank" className="btn btn-primary">Download CV</a>
                                        <a href="/" target="_self" className="btn btn-secondary">Contact</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Home Page Top Part */}
            {/* Fun Facts */}
            <div className="row">
                <div className="col-xs-12 col-sm-12">
                    <div className="block-title">
                        <h2>Skill</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-3">
                    <div className="lm-info-block gray-default">
                        <i className="fab fa-js" />
                        <h4>Happy Clients</h4>
                        {/* <span className="lm-info-block-value">578</span> */}
                        <span className="lm-info-block-text" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-3">
                    <div className="lm-info-block gray-default">
                        <i className="linecons linecons-clock" />
                        <h4>Working Hours</h4>
                        <span className="lm-info-block-value">4,780</span>
                        <span className="lm-info-block-text" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-3 ">
                    <div className="lm-info-block gray-default">
                        <i className="linecons linecons-star" />
                        <h4>Awards Won</h4>
                        <span className="lm-info-block-value">15</span>
                        <span className="lm-info-block-text" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-3 ">
                    <div className="lm-info-block gray-default">
                        <i className="linecons linecons-cup" />
                        <h4>Coffee Consumed</h4>
                        <span className="lm-info-block-value">1,286</span>
                        <span className="lm-info-block-text" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12">
                    <div className="block-title">
                        <h2>Projects</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className=" col-xs-12 col-sm-12 ">
                    <div id="portfolio_content_q" className="portfolio-content">
                        <div className="portfolio-grid three-columns shuffle">
                            <figure className="item lbimage" data-groups="[&quot;category_all&quot;, &quot;category_image&quot;]">
                                <div className="portfolio-item-img">
                                    <img src="img/portfolio/3.jpg" alt="Simaltor"  />
                                    <a href="img/portfolio/full/3.jpg" className="lightbox" title="Simaltor"/>
                                </div>
                                <i className="fa fa-image" />
                                <h4 className="name">Simaltor</h4>
                                <span className="category">Image</span>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            {/* /Fun Facts */}
            {/* <div className="p-40" /> */}

        </>
    )
}
