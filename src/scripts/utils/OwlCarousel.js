import 'owl.carousel';
import jQuery from 'jquery';

class OwlCarousel {
    static init() {
        const defaultConfig = {
            "responsive": {
                "0": {
                    "items": "1"
                },
                "480": {
                    "items": "1"
                },
                "768": {
                    "items": "1"
                },
                "980": {
                    "items": "1"
                },
                "1200": {
                    "items": "1"
                },
                "1500": {
                    "items": "1"
                }
            },
            "autoplay": true,
            "autoplayHoverPause": false,
            "smartSpeed": 200,
            "fluidSpeed": 200,
            "autoplaySpeed": 5000,
            "navSpeed": 200,
            "dotsSpeed": 200,
            "loop": true,
            "nav": false,
            "dots": false,
            "responsiveRefreshRate": 200,
            "slideBy": "1",
            "mergeFit": true,
            "autoHeight": true,
            "lazyLoad": false,
            "lazyLoadEager": 1,
            "mouseDrag": true,
            "touchDrag": true,
            "ratio": "1.7",
            "rtl": false,
            /*"animateOut": 'slideOutDown',
            "animateIn": 'flipInX',*/

        };
        const actualiteConfig = JSON.parse(JSON.stringify(defaultConfig));
        actualiteConfig.dots = true;
        OwlCarousel.make(jQuery('.actualite .owl-carousel'),actualiteConfig);

        const agendaConfig = JSON.parse(JSON.stringify(defaultConfig));
        agendaConfig.responsive = {
            "0": {
                "items": "1",
                "stagePadding": 0
            },
            "480": {
                "items": "1",
                "stagePadding": 0
            },
            "768": {
                "items": "1",
                "stagePadding": 0
            },
            "980": {
                "items": "1",
                "stagePadding": 100
            },
            "1200": {
                "items": "1",
                "stagePadding": 150
            },
            "1500": {
                "items": "2",
                "stagePadding": 200
            },
            "1800": {
                "items": "2",
                "stagePadding": 250
            },
            "1920": {
                "items": "2",
                "stagePadding": 300
            }
        };
        agendaConfig.autoplay = true;
        OwlCarousel.make(jQuery('.agenda .owl-carousel'),agendaConfig);

        const mediaConfig = JSON.parse(JSON.stringify(defaultConfig));
        mediaConfig.responsive = {
            "0": {
                "items": "1",
                "stagePadding": 0
            },
            "480": {
                "items": "1",
                "stagePadding": 0
            },
            "768": {
                "items": "1",
                "stagePadding": 0
            },
            "980": {
                "items": "1",
                "stagePadding": 100
            },
            "1200": {
                "items": "1",
                "stagePadding": 250
            },
            "1500": {
                "items": "1",
                "stagePadding": 350
            },
            "1800": {
                "items": "1",
                "stagePadding": 400
            },
            "1920": {
                "items": "1",
                "stagePadding": 450
            }
        };
        mediaConfig.nav = true;
        OwlCarousel.make(jQuery('.espace-media-section .owl-carousel'),mediaConfig);

        const logosConfig = JSON.parse(JSON.stringify(defaultConfig));
        logosConfig.responsive = {
            "0": {
                "items": "1",
                "stagePadding": 0
            },
            "480": {
                "items": "1",
                "stagePadding": 0
            },
            "768": {
                "items": "1",
                "stagePadding": 0
            },
            "980": {
                "items": "2",
                "stagePadding": 50
            },
            "1200": {
                "items": "3",
                "stagePadding": 100
            },
            "1500": {
                "items": "3",
                "stagePadding": 150
            },
            "1800": {
                "items": "3",
                "stagePadding": 400
            },
            "1920": {
                "items": "3",
                "stagePadding": 220
            }
        };
        OwlCarousel.make(jQuery('.lien-utils .owl-carousel'),logosConfig);
    }

    static make(element,config) {
        jQuery(element).each(function () {
            const carousel = this;
            const $owl = jQuery(carousel);
            $owl.owlCarousel(config);
            $owl.css('visibility', 'visible');
            OwlCarousel.sa_resize_slider(carousel, config);
            window.addEventListener('resize', OwlCarousel.sa_resize_slider(carousel, config));

        });
    }

    static sa_resize_slider(element/*, config*/) {
        const min_height = '50';
        const win_width = jQuery(window).width();
        const slider_width = jQuery(element).width();
        let slide_width = slider_width / 5;
        if (win_width < 480) {
            slide_width = slider_width / 1;
        } else if (win_width < 768) {
            slide_width = slider_width / 2;
        } else if (win_width < 980) {
            slide_width = slider_width / 3;
        } else if (win_width < 1200) {
            slide_width = slider_width / 3;
        } else if (win_width < 1500) {
            slide_width = slider_width / 4;
        }
        slide_width = Math.round(slide_width);
        var slide_height = '0';
        if (min_height === 'aspect43') {
            slide_height = (slide_width / 4) * 3;
            slide_height = Math.round(slide_height);
        } else if (min_height === 'aspect169') {
            slide_height = (slide_width / 16) * 9;
            slide_height = Math.round(slide_height);
        } else {
            slide_height = (slide_width / 100) * min_height;
            slide_height = Math.round(slide_height);
        }
        jQuery('.owl-item .sa_hover_container', element).css('min-height', slide_height + 'px');
        //if (jQuery(element).hasClass('carousel-posts'))
        //    jQuery('.owl-item .sa_slide_posts-img', element).css('min-height', jQuery('.owl-item', element).width() / config['ratio'] + 'px');
    }
}

export default OwlCarousel;