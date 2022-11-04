import React, { MouseEvent, forwardRef, useEffect, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { OverflowBodyHidden } from '../../../styled/overflow-body-hidden';
import { Icon } from '../../icon/Icon';
import { StyledModal } from './styled/styled-modal';
import { StyledModalClose } from './styled/styled-modal-close';
import { StyledModalOverlay } from './styled/styled-modal-overlay';
import { ModalElement, ModalProps } from './models';
import { StyledModalContent } from './styled/styled-modal-content';
import { StyledModalWrap } from './styled/styled-modal-wrap';
import {AnimatePresence} from 'framer-motion';
import {useBoolean} from "../../../hooks/useBoolean";
import {animationTransition, animationVariantsModalOverlay, animationVariantsModalContent} from './constants/animations';

let bodyOverflowHiddenModalCount = 0;

export const Modal = forwardRef<ModalElement, ModalProps>(
    ({
        children,
        size = 'md',
        verticalPosition = 'top',
        defaultOpened = false,
        showClose = true,
        outsideClose = false,
        ...props
     }, ref) => {
        const {
            state: isOpen,
            setTrue: open,
            setFalse: close,
        } = useBoolean(defaultOpened);

        const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
            e.target === e.currentTarget && close()
        };

        useEffect(() => {
            bodyOverflowHiddenModalCount = isOpen
                ? bodyOverflowHiddenModalCount + 1
                : bodyOverflowHiddenModalCount === 0
                    ? 0
                    : bodyOverflowHiddenModalCount - 1;
        }, [isOpen]);

        useEffect(() => {
            const handleEscape = (event: KeyboardEvent) => event.key === 'Escape' && close();

            if (isOpen) {
                document.addEventListener('keydown', handleEscape, false);
            }

            return () => {
                document.removeEventListener('keydown', handleEscape, false);
            };
        }, [isOpen]);

        useImperativeHandle(
            ref,
            () => ({ open, close }),
            [],
        );

        const portalContent = isOpen ? (
            <StyledModal
                className="modal"
                variants={animationVariantsModalContent}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={animationTransition}
                index={bodyOverflowHiddenModalCount}
            >
                <StyledModalWrap onClick={handleBackdropClick} verticalPosition={verticalPosition}>
                    <StyledModalContent size={size}>
                        {showClose && (
                            <StyledModalClose outsideClose={outsideClose} onClick={close}>
                                <Icon name='Cross' color='inherit' />
                            </StyledModalClose>
                        )}
                        {children}
                    </StyledModalContent>
                </StyledModalWrap>
            </StyledModal>
        ) : null

        const overlay = (
            <StyledModalOverlay
                className="overlay"
                onClick={close}
                variants={animationVariantsModalOverlay}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={animationTransition}
            />
        )

        return (
            <>
                {!!bodyOverflowHiddenModalCount && <OverflowBodyHidden />}
                <AnimatePresence>{isOpen && overlay}</AnimatePresence>
                {
                    createPortal(
                        <AnimatePresence>{portalContent}</AnimatePresence>,
                        document.body,
                    )
                }
            </>
        );
    },
);

export default Modal;
