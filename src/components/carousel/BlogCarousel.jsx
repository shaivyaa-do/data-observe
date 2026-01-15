import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./carousel.css"

export const BlogsCarousel = ({ BlogJson }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const Article = (props) => {
    const { image, title, id, domain } = props
    return (
      <>
        <figure className="snip1584">
          <img src={image} height="100%" alt={title} />
          <figcaption>
            <h3>{title}</h3>
            <a href={`/blog/${id}`}>Read more</a>

          </figcaption>
        </figure>

        <p>Posted by DO team</p>
        <div className="d-flex domain-share">
          <div className="domain-insigts">
            <p className="domain">{domain}</p>
          </div>
          <div>
            <img
              className="share"
              src="./images/share.png"
              alt="like"
              width={28}
              height={28}
            />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="carousel-navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {BlogJson?.map((ele) => {
            return (
              <div className="keen-slider__slide">
                <Article title={ele?.title} image={ele.children[0]?.src} id={ele?.id} domain={ele?.domain} />
              </div>
            )
          })}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="carousel-dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length - 2).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"carousel-dot" + (currentSlide === idx ? " carousel-active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? " carousel-arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`carousel-arrow ${props.left ? "carousel-arrow--left" : "carousel-arrow--right"
        } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" fill={!disabeld && "black"} />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill={!disabeld && "black"} />
      )}
    </svg>
  )
}
