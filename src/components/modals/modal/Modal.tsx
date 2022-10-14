import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';
import { OverflowBodyHidden } from '../../../styled/overflow-body-hidden';
import { Icon } from '../../icon/Icon';
import { StyledModal } from './styled/styled-moda';
import { StyledModalClose } from './styled/styled-modal-close';
import { StyledModalOverlay } from './styled/styled-modal-overlay';
import { ModalElement, ModalProps } from './models';
import { StyledModalContent } from './styled/styled-modal-content';
import { StyledModalWrap } from './styled/styled-modal-wrap';

let bodyOverflowHiddenModalCount = 0;

export const Modal = forwardRef<ModalElement, ModalProps>(
    ({
         children,
         size = 'md',
         defaultOpened = false,
         showClose = true,
         outsideClose = false,
         ...props
     }, ref) => {
        const [isOpen, setIsOpen] = useState(defaultOpened);
        const close = useCallback(() => setIsOpen(false), []);
        const handleEscape = useCallback(
            (event: KeyboardEvent) => {
                if (event.keyCode === 27) {
                    close();
                }
            },
            [close],
        );

        useEffect(() => {
            bodyOverflowHiddenModalCount = isOpen
                ? bodyOverflowHiddenModalCount + 1
                : bodyOverflowHiddenModalCount === 0
                    ? 0
                    : bodyOverflowHiddenModalCount - 1;
        }, [isOpen]);

        useEffect(() => {
            if (isOpen) {
                document.addEventListener('keydown', handleEscape, false);
            }

            return () => {
                document.removeEventListener('keydown', handleEscape, false);
            };
        }, [handleEscape, isOpen]);

        useImperativeHandle(
            ref,
            () => ({
                open: () => setIsOpen(true),
                close,
            }),
            [close],
        );

        return (
            <>
                {!!bodyOverflowHiddenModalCount && <OverflowBodyHidden />}
                {
                    createPortal(
                        isOpen ? (
                            <StyledModal index={bodyOverflowHiddenModalCount}>
                                <StyledModalOverlay />
                                <StyledModalWrap>
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
                        ) : null,
                        document.body,
                    )
                }
            </>
        );
    },
);

export default Modal;
