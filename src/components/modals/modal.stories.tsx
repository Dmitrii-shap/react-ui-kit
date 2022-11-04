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

type OverrideModalType = ModalProps & ModalHeaderProps & ModalActionsProps & {content: string};

const Template: ComponentStory<typeof OverrideModal> = (args) => <OverrideModal {...args} />;
export const MainModal = Template.bind({});
MainModal.args = {
    size: 'md',
    outsideClose: false,
    showClose: true,
    verticalPosition: 'top',
    defaultOpened: false,
    title: 'Header title',
    align: 'center',
    content: 'bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus'
};
MainModal.argTypes = {
    defaultOpened: {
        table: { disable: true },
    },
    align: {
        name: "Actions align -> 'center' | 'left' | 'right' | 'space-between'",
    },
};

export const ScrolledModal = Template.bind({});
ScrolledModal.args = {
    size: 'md',
    outsideClose: false,
    showClose: true,
    verticalPosition: 'top',
    defaultOpened: false,
    title: 'Header title',
    align: 'center',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis sed odio morbi quis commodo odio. Faucibus in ornare quam viverra orci sagittis eu. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Etiam tempor orci eu lobortis elementum nibh tellus. Eu mi bibendum neque egestas congue quisque egestas. Phasellus egestas tellus rutrum tellus pellentesque eu. Lorem ipsum dolor sit amet consectetur. Sagittis vitae et leo duis ut diam quam. Quis viverra nibh cras pulvinar mattis nunc sed. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Id consectetur purus ut faucibus pulvinar elementum integer enim. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Ipsum suspendisse ultrices gravida dictum fusce ut.
    Ut etiam sit amet nisl purus in mollis. Ornare lectus sit amet est placerat in egestas erat imperdiet. Praesent tristique magna sit amet purus gravida quis blandit. Scelerisque felis imperdiet proin fermentum leo vel. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. A diam maecenas sed enim. Feugiat in fermentum posuere urna nec. Blandit turpis cursus in hac. Turpis egestas integer eget aliquet nibh praesent. Nullam vehicula ipsum a arcu cursus vitae congue mauris.
    Dignissim diam quis enim lobortis scelerisque. Iaculis eu non diam phasellus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Sit amet nisl purus in mollis nunc sed id. Mauris ultrices eros in cursus turpis massa. Consequat id porta nibh venenatis cras. Gravida rutrum quisque non tellus orci ac auctor. Risus sed vulputate odio ut. Varius vel pharetra vel turpis. Eu consequat ac felis donec. Gravida arcu ac tortor dignissim convallis aenean et tortor. In nibh mauris cursus mattis molestie a iaculis. Ullamcorper velit sed ullamcorper morbi.
    Cursus in hac habitasse platea dictumst quisque. Gravida dictum fusce ut placerat orci nulla. Praesent semper feugiat nibh sed. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Adipiscing enim eu turpis egestas pretium aenean. Sit amet nulla facilisi morbi tempus iaculis urna id. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Sit amet facilisis magna etiam tempor.
    Accumsan tortor posuere ac ut consequat semper viverra nam. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Amet aliquam id diam maecenas ultricies mi eget mauris. Orci nulla pellentesque dignissim enim sit amet venenatis. Blandit aliquam etiam erat velit scelerisque in dictum. Placerat in egestas erat imperdiet sed euismod. Cursus euismod quis viverra nibh cras. Lobortis scelerisque fermentum dui faucibus in ornare. Quam id leo in vitae turpis massa sed elementum tempus. Nibh tortor id aliquet lectus proin. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Lectus sit amet est placerat in. Sit amet est placerat in egestas erat imperdiet sed. Eleifend quam adipiscing vitae proin sagittis.
    Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Maecenas sed enim ut sem viverra aliquet eget sit. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Massa vitae tortor condimentum lacinia quis vel. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. At ultrices mi tempus imperdiet nulla malesuada. Egestas purus viverra accumsan in nisl nisi. Netus et malesuada fames ac. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Non curabitur gravida arcu ac tortor dignissim. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Proin sed libero enim sed faucibus turpis. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Amet risus nullam eget felis eget nunc. Diam vel quam elementum pulvinar etiam non. Facilisi nullam vehicula ipsum a arcu cursus vitae. Pharetra massa massa ultricies mi.
    Odio ut sem nulla pharetra diam sit amet. Nulla aliquet enim tortor at auctor urna nunc. Sagittis nisl rhoncus mattis rhoncus urna. Mattis rhoncus urna neque viverra justo nec. Cursus euismod quis viverra nibh cras. Imperdiet proin fermentum leo vel orci porta non. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Diam maecenas sed enim ut sem viverra aliquet eget sit. Nec nam aliquam sem et tortor consequat id porta. Elementum sagittis vitae et leo duis ut diam. Justo donec enim diam vulputate ut. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Viverra vitae congue eu consequat ac felis donec et. Dui ut ornare lectus sit amet est placerat in egestas. Sed risus pretium quam vulputate. Convallis convallis tellus id interdum velit. Ut consequat semper viverra nam libero justo laoreet.
    Enim tortor at auctor urna nunc id cursus metus. Augue lacus viverra vitae congue eu consequat ac felis donec. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Ultricies integer quis auctor elit sed vulputate. Amet luctus venenatis lectus magna. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Ultrices dui sapien eget mi proin. Nibh nisl condimentum id venenatis a condimentum vitae. Mauris sit amet massa vitae. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Id venenatis a condimentum vitae. Tellus orci ac auctor augue. Ante metus dictum at tempor commodo ullamcorper a lacus. Urna id volutpat lacus laoreet non curabitur gravida arcu.
    Nec ullamcorper sit amet risus nullam. Nam libero justo laoreet sit amet cursus sit amet. Viverra maecenas accumsan lacus vel facilisis volutpat. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Netus et malesuada fames ac turpis egestas. Posuere ac ut consequat semper viverra nam libero justo. Arcu non odio euismod lacinia at quis. Nulla at volutpat diam ut venenatis tellus. Aliquam purus sit amet luctus venenatis. Scelerisque purus semper eget duis at tellus. Tincidunt arcu non sodales neque sodales ut etiam. Rutrum quisque non tellus orci ac auctor augue mauris augue. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Dignissim cras tincidunt lobortis feugiat vivamus. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Fames ac turpis egestas maecenas pharetra convallis posuere. Nam libero justo laoreet sit amet cursus sit. Nam at lectus urna duis convallis convallis tellus. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum.
    Risus sed vulputate odio ut enim blandit volutpat. Leo integer malesuada nunc vel risus commodo viverra maecenas. Morbi tempus iaculis urna id volutpat lacus laoreet non. Turpis cursus in hac habitasse platea dictumst. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Lectus nulla at volutpat diam ut venenatis tellus. Id faucibus nisl tincidunt eget nullam non nisi. Mauris a diam maecenas sed enim ut sem viverra. Enim facilisis gravida neque convallis a. Tortor dignissim convallis aenean et tortor at risus viverra.
    Lacinia quis vel eros donec ac odio tempor orci. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Augue ut lectus arcu bibendum at varius vel pharetra. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Et pharetra pharetra massa massa. Massa eget egestas purus viverra accumsan. Nulla malesuada pellentesque elit eget gravida. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Tristique senectus et netus et. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Risus in hendrerit gravida rutrum quisque non tellus orci. Tincidunt id aliquet risus feugiat in ante. Habitant morbi tristique senectus et. Semper viverra nam libero justo.
    Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Tellus id interdum velit laoreet id donec ultrices. Adipiscing bibendum est ultricies integer quis. Odio ut enim blandit volutpat maecenas volutpat. Sed pulvinar proin gravida hendrerit lectus a. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Nibh nisl condimentum id venenatis a condimentum. Praesent elementum facilisis leo vel fringilla est ullamcorper. Lectus nulla at volutpat diam ut. Sed pulvinar proin gravida hendrerit lectus a. Quis eleifend quam adipiscing vitae proin. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Habitant morbi tristique senectus et netus et. Congue quisque egestas diam in arcu cursus euismod. Suscipit adipiscing bibendum est ultricies integer.
    Rutrum tellus pellentesque eu tincidunt tortor. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Pretium aenean pharetra magna ac placerat. Id ornare arcu odio ut sem. Non odio euismod lacinia at quis risus. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Nullam vehicula ipsum a arcu. Vulputate dignissim suspendisse in est ante. Velit aliquet sagittis id consectetur. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. In aliquam sem fringilla ut morbi tincidunt augue.
    Lacus vel facilisis volutpat est velit egestas dui. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Commodo odio aenean sed adipiscing diam donec. Magnis dis parturient montes nascetur ridiculus. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Eu ultrices vitae auctor eu augue ut lectus. Laoreet sit amet cursus sit. Enim ut tellus elementum sagittis vitae et leo. Dictumst quisque sagittis purus sit amet. Condimentum mattis pellentesque id nibh tortor id. Interdum velit euismod in pellentesque massa placerat duis. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Duis ut diam quam nulla porttitor massa id. Semper auctor neque vitae tempus quam pellentesque nec. Nunc non blandit massa enim nec dui nunc. Massa tempor nec feugiat nisl. Augue neque gravida in fermentum et sollicitudin.
    Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Bibendum arcu vitae elementum curabitur vitae nunc sed. Lectus urna duis convallis convallis. Senectus et netus et malesuada fames ac. Aliquet enim tortor at auctor urna nunc id cursus. Nisi est sit amet facilisis magna etiam. Venenatis tellus in metus vulputate eu scelerisque. Quisque egestas diam in arcu cursus euismod quis viverra. Feugiat in fermentum posuere urna nec tincidunt. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Nisl vel pretium lectus quam. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Dui vivamus arcu felis bibendum ut tristique.
    Praesent elementum facilisis leo vel fringilla est. Viverra aliquet eget sit amet tellus cras adipiscing enim. Facilisis sed odio morbi quis commodo. Tellus orci ac auctor augue. Eget nunc lobortis mattis aliquam faucibus purus. In ornare quam viverra orci sagittis eu. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Velit sed ullamcorper morbi tincidunt ornare massa. Non consectetur a erat nam at. Non pulvinar neque laoreet suspendisse interdum consectetur libero.
    A arcu cursus vitae congue. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Elementum nibh tellus molestie nunc. Pellentesque massa placerat duis ultricies. Quam lacus suspendisse faucibus interdum. Scelerisque felis imperdiet proin fermentum leo vel. Donec enim diam vulputate ut pharetra sit amet aliquam. Id consectetur purus ut faucibus. Tellus at urna condimentum mattis pellentesque. Arcu dictum varius duis at consectetur lorem donec massa. Nec ultrices dui sapien eget mi proin sed. Sagittis vitae et leo duis ut diam quam nulla porttitor. Massa vitae tortor condimentum lacinia quis vel. Semper quis lectus nulla at volutpat diam ut. Condimentum vitae sapien pellentesque habitant morbi tristique. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Nisi est sit amet facilisis. Purus ut faucibus pulvinar elementum integer enim.
    Mauris a diam maecenas sed enim ut sem. Odio aenean sed adipiscing diam donec adipiscing tristique. Nisi est sit amet facilisis magna etiam tempor. Mauris vitae ultricies leo integer. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Ac turpis egestas sed tempus. Odio ut sem nulla pharetra diam. At elementum eu facilisis sed odio. Enim facilisis gravida neque convallis a cras. Elit ullamcorper dignissim cras tincidunt. Ac turpis egestas maecenas pharetra convallis posuere. Lectus arcu bibendum at varius vel pharetra vel turpis.
    Odio aenean sed adipiscing diam donec. Nunc scelerisque viverra mauris in aliquam. Quisque id diam vel quam. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Quisque sagittis purus sit amet volutpat. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Et pharetra pharetra massa massa ultricies mi. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Rhoncus dolor purus non enim praesent elementum facilisis leo. Egestas diam in arcu cursus euismod quis viverra. Hac habitasse platea dictumst vestibulum rhoncus est.
    Enim eu turpis egestas pretium aenean. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Turpis nunc eget lorem dolor sed viverra. Duis tristique sollicitudin nibh sit amet commodo nulla. Etiam sit amet nisl purus in. Imperdiet massa tincidunt nunc pulvinar. Iaculis nunc sed augue lacus viverra vitae. Sed sed risus pretium quam vulputate. Lobortis elementum nibh tellus molestie. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Elementum curabitur vitae nunc sed. Congue quisque egestas diam in arcu cursus. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Id neque aliquam vestibulum morbi blandit cursus risus.`,
};
ScrolledModal.argTypes = {
    defaultOpened: {
        table: { disable: true },
    },
    align: {
        name: "Actions align -> 'center' | 'left' | 'right' | 'space-between'",
    },
};

const OverrideModal: FC<OverrideModalType> = (props) => {
    const { size, outsideClose, showClose, title, align, content, verticalPosition } = props;
    const modalRef = useRef<ModalElement>(null);

    return (
        <div>
            <Button onClick={() => modalRef.current?.open()}>Open base modal</Button>

            <Modal ref={modalRef} size={size} outsideClose={outsideClose} showClose={showClose} verticalPosition={verticalPosition}>
                <ModalHeader title={title} />
                <ModalBody>
                    {content.split(/\n/).map(paragraph => (<p>{paragraph}</p>))}
                </ModalBody>
                <ModalActions align={align}>
                    <Button onClick={() => modalRef.current?.close()} variant='outlined'> Close </Button>
                    <Button onClick={() => alert('action')}> Action </Button>
                </ModalActions>
            </Modal>
        </div>
    );
};
