import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './ProductCarousel.css'

const ProductCarousel = () => {
const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, // 無限スクロール
    }); // Emblaのフックを使用

    useEffect(() => {
    if (emblaApi) {
      // EmblaのAPIを使って追加の処理を記述可能
        emblaApi.on('select', () => {
        console.log('スライドが変更されました');
            });
        }
    }, [emblaApi]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">スライド1</div>
                <div className="embla__slide">スライド2</div>
                <div className="embla__slide">スライド3</div>
            </div>
        </div>
    );
};

export default ProductCarousel;
