import { useContext, useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { animateScroll, scroller } from 'react-scroll';
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';
import { PrefersReducedMotionContext } from '../../common/contexts';
import { Experience, Hero, Projects, ScrollToElement } from '../../components';
import profilePhoto from '../../assets/images/anthony-pinzone-profile-photo-cropped.jpg';

export default function HomePage() {
    const { prefersReducedMotion } = useContext(PrefersReducedMotionContext);
    const location = useLocation();
    const navigationType = useNavigationType();

    const animationOptions = {
        activeClass: 'active',
        duration: prefersReducedMotion ? 0 : 500,
        offset: -76,
        smooth: true,
        spy: true,
    };

    useEffect(() => {
        // Only scroll to the element if the user is navigating forward
        if (navigationType !== 'POP' && location.state?.scrollTarget) {
            if (location.state.scrollTarget === 'top') {
                animateScroll.scrollToTop({ ...animationOptions, ...location.state.animationOptions });
            }
            else {
                scroller.scrollTo(location.state.scrollTarget, {
                    ...animationOptions,
                    ...location.state.animationOptions
                });
            }
        }
    }, [location]);

    return (
        <div className="home-page">
            <Hero
                className="intro"
                image={{ src: profilePhoto, alt: "Anthony standing on a boat overlooking the Hudson River in New York City", hasShadow: true }}
                ctas={[
                    {
                        icon: <FaLinkedin />,
                        label: "LinkedIn",
                        to: "https://www.linkedin.com/in/anthonyjpinzone/",
                        newTab: true,
                    },
                    {
                        icon: <FaGithub />,
                        label: "Github",
                        to: "https://github.com/AnthonyPinzone",
                        newTab: true,
                    },
                    {
                        icon: <FaCodepen />,
                        label: "CodePen",
                        to: "https://codepen.io/AnthonyPinzone",
                        newTab: true,
                    },
                ]}
            >
                <h1>Hi! I&apos;m Anthony</h1>
                <p>
                    I&apos;m a Frontend Developer driven by the challenge of
                    transforming captivating designs into dynamic websites. Beyond the{' '}
                    <span className="mono">pixels</span> and{' '}
                    <span className="mono">breakpoints</span>, my passion extends to
                    mentoring aspiring developers on their coding journey.
                </p>
                <p>
                    I&apos;d love to connect,{' '}
                    <ScrollToElement className="cta-link" to="footer">
                        reach out today
                    </ScrollToElement>{' '}
                    and let&apos;s build something awesome!
                </p>
            </Hero>
            <Projects />
            <Experience />
        </div>
    )
}
