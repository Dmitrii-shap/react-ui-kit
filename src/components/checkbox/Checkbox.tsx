import React, { FC } from 'react';
import { CheckboxProps } from './models';
import { StyledCheckboxContainer, StyledCheckboxLabel, StyledCheckbox } from './styled';

const Checkbox: FC<CheckboxProps> = (props) => {
    const {label, color, checked, onChange} = props;
    return (
        <StyledCheckboxContainer>
            {label && <StyledCheckboxLabel>{label}</StyledCheckboxLabel>}
            <input type='checkbox' hidden checked={checked} onChange={onChange}/>
            <StyledCheckbox checked={!!checked} color={color}></StyledCheckbox>
        </StyledCheckboxContainer>
    );
};

export default Checkbox;
