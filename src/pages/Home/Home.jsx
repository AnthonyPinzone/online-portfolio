import { useContext, useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { animateScroll, scroller } from 'react-scroll';
import { PrefersReducedMotionContext } from '../../common/contexts';
import { Experience, Intro, Projects } from '../../components';

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
            <Intro />
            <Projects />
            <Experience />
        </div>
    )
}
