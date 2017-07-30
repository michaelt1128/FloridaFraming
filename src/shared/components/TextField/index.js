import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const TextField = props => {
    const cn = classnames('ffs-textfield', props.className, { 'negative': props.style === 'negative' });
    const labelCn = classnames('__label', { '--float': props.value });
    
    return (
        <div className={cn}>
            <div className={labelCn}>
                {props.label}
            </div>
            <input
                className="__input-field"
                onChange={props.onChange}
                autoComplete={props.autocomplete}
                autoFocus={props.autofocus}
                maxLength={props.maxLength}
                readOnly={props.readonly}
                disabled={props.disabled}
                type={props.type === 'number' ? 'number' : 'text'}
                value={props.value}
            />
        </div>
    )
}

export default TextField;