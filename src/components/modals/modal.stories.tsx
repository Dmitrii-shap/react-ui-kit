import React, { FC, useRef } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../button/Button';
import Modal from './modal/Modal';
import { ModalActions } from './modal/ModalActions';
import { ModalBody } from './modal/ModalBody';
import { ModalHeader } from './modal/ModalHeader';
import { ModalActionsProps, ModalElement, ModalHeaderProps, ModalProps } from './modal/models';

export default {
    title: 'Components/Modal',
    component: Modal,
    subcomponents: { ModalHeader, ModalBody, ModalActions },
    parameters: { controls: { sort: 'requiredFirst' } },
    controls: { hideNoControlsWarning: true },
} as ComponentMeta<typeof Modal>;

type OverrideModalType = ModalProps & ModalHeaderProps & ModalActionsProps;

const Template: ComponentStory<typeof OverrideModal> = (args) => <OverrideModal {...args} />;
export const MainModal = Template.bind({});
MainModal.args = {
    size: 'md',
    outsideClose: false,
    showClose: true,
    defaultOpened: false,
    title: 'Header title',
    align: 'center',
};
MainModal.argTypes = {
    defaultOpened: {
        table: { disable: true },
    },
    align: {
        name: "Actions align -> 'center' | 'left' | 'right' | 'space-between'",
    },
};

const OverrideModal: FC<OverrideModalType> = (props) => {
    const { size, outsideClose, showClose, title, align } = props;
    const modalRef = useRef<ModalElement>(null);

    return (
        <div>
            <Button onClick={() => modalRef.current?.open()}>Open base modal</Button>

            <Modal ref={modalRef} size={size} outsideClose={outsideClose} showClose={showClose}>
                <ModalHeader title={title} />
                <ModalBody>
                    content <br />
                    content <br />
                    content <br />
                    content <br />
                    content <br />
                    content <br />
                    content <br />
                </ModalBody>
                <ModalActions align={align}>
                    <Button onClick={() => modalRef.current?.close()} variant='outlined'> Close </Button>
                    <Button onClick={() => alert('action')}> Action </Button>
                </ModalActions>
            </Modal>
        </div>
    );
};
