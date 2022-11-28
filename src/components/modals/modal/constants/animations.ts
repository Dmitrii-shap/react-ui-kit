export const animationVariantsModalOverlay = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

export const animationVariantsModalContent = {
    hidden: {
        ...animationVariantsModalOverlay.hidden,
        y: -500,
    },
    visible: {
        ...animationVariantsModalOverlay.visible,
        y: 0,
    },
};

export const animationTransition = {
    duration: 0.3,
    ease: 'easeInOut',
};
