import './animate.scss';
let animations = ['animated','bounce','flash','pulse','rubberBand','shake','headShake','swing','tada','wobble','jello','bounceIn','bounceInDown','bounceInLeft','bounceInRight','bounceInUp','bounceOut','bounceOutDown','bounceOutLeft','bounceOutRight','bounceOutUp','fadeIn','fadeInDown','fadeInDownBig','fadeInLeft','fadeInLeftBig','fadeInRight','fadeInRightBig','fadeInUp','fadeInUpBig','fadeOut','fadeOutDown','fadeOutDownBig','fadeOutLeft','fadeOutLeftBig','fadeOutRight','fadeOutRightBig','fadeOutUp','fadeOutUpBig','flipInX','flipInY','flipOutX','flipOutY','lightSpeedIn','lightSpeedOut','rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight','rotateOut','rotateOutDownLeft','rotateOutDownRight','rotateOutUpLeft','rotateOutUpRight','hinge','jackInTheBox','rollIn','rollOut','zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp','zoomOut','zoomOutDown','zoomOutLeft','zoomOutRight','zoomOutUp','slideInDown','slideInLeft','slideInRight','slideInUp','slideOutDown','slideOutLeft','slideOutRight','slideOutUp'];
const setAnimate = (el, value) => {
    const { customAnimations, name, delay, duration, iterationCount, fillMode } = value;
    const prefix = ['webkit', 'moz', 'o', ];
    let cssText;

    if (!!customAnimations) {
    	animations = [...animations, ...customAnimations];
    }

    if (!!delay) {
        prefix.map(function(item) {
            cssText += `-${ item }-animation-delay: ${ delay }ms; `;
        });
    }


    if (!!duration) {
        prefix.map(function(item) {
            cssText += `-${ item }-animation-duration: ${ duration }ms; `;
        });
    }


    if (!!iterationCount) {
        prefix.map(function(item) {
            cssText += `-${ item }-animation-iteration-count: ${ iterationCount }; `;
        });
    }

    if (!!fillMode) {
        prefix.map(function(item) {
            cssText += `-${ item }-animation-fill-mode: ${ fillMode }; `;
        });
    }

    el.style.cssText = cssText;
    el.className = `${ el.classList.value } animated ${ name }`;

    el.addEventListener('animationend', () => {
        const classList = el.classList;
        if (!iterationCount) {
            animations.forEach(item => {
                if (classList.contains(item)) {
                    el.classList.remove(item);
                }
            });
        }

    }, false);
}

Vue.directive('nut-animate', {
    inserted: (el) => {},
    bind: (el, binding, ) => {
        const { value, modifiers } = binding;
        const { click, hover } = modifiers;
		//const firstDisable = value.firstDisable || true;
        if (click) {
            el.onclick = () => {
                setAnimate(el, value, modifiers);
            }
            return;
        }

        if (hover) {
            el.onmouseover = () => {
                console.log('ss');
                setAnimate(el, value, modifiers);
            }
            return;
        }

        //if (firstDisable && firstDisable != false) {
            setAnimate(el, value, modifiers);
        //}
    }
});