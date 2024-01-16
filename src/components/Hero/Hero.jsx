import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../../layout';
import './Hero.scss';

export function Hero({ children, className, ctas, image }) {
    return (
        <section className={`hero ${className || ''}`}>
            <Container className={"hero__container"}>
                <div className="hero__content">
                    {children}

                    {ctas && ctas.length > 0 && (
                        <ul className="hero__social">
                            {ctas.map((cta, index) => (
                                <li className="hero__social-item" key={index}>
                                    <a
                                        className="hero__social-link"
                                        href={cta.to}
                                        target={cta.newTab ? '_blank' : '_self'}
                                        rel="noreferrer"
                                    >
                                        {cta.icon} {cta.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {image && image.src && (
                    <figure className={`hero__figure ${image.hasShadow ? 'hero__figure--shadow' : ''}`}>
                        <img
                            className="hero__img"
                            src={image.src}
                            alt={image.alt || ''}
                        />
                    </figure>
                )}
            </Container>
        </section>
    )
}

Hero.propTypes = {
    children: PropTypes.node.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
        hasShadow: PropTypes.bool,
    }),
}
