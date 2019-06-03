import React from 'react';
import { func, object, oneOf, shape, string } from 'prop-types';
import HeartIcon from 'react-feather/dist/icons/heart';
import Edit2Icon from 'react-feather/dist/icons/edit-2';
import TrashIcon from 'react-feather/dist/icons/trash';

import { mergeClasses } from 'src/classify';
import Icon from 'src/components/Icon';

import defaultClasses from './section.css';

const defaultIconAttributes = {
    color: 'rgb(var(--venia-teal))',
    width: '14px',
    height: '14px'
};
const icons = {
    Heart: HeartIcon,
    Edit2: Edit2Icon,
    Trash: TrashIcon
};

const Section = props => {
    const { icon, iconAttributes, onClick, text } = props;

    const attributes = iconAttributes
        ? Object.assign({}, defaultIconAttributes, iconAttributes)
        : defaultIconAttributes;
    const classes = mergeClasses(defaultClasses, props.classes);
    const iconSrc = icons[icon];

    return (
        <li className={classes.menuItem}>
            <button onClick={onClick}>
                {iconSrc && <Icon src={iconSrc} attrs={attributes} />}
                <span className={classes.text}>{text}</span>
            </button>
        </li>
    );
};

Section.propTypes = {
    classes: shape({
        menuItem: string,
        text: string
    }),
    icon: oneOf(Object.keys(icons)),
    iconAttributes: object,
    onClick: func,
    text: string
};

export default Section;
