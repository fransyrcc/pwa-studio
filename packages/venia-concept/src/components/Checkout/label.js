import React from 'react';
import { bool, node, shape, string } from 'prop-types';

import { mergeClasses } from 'src/classify';
import defaultClasses from './label.css';

const Label = props => {
    const { children, plain, ...restProps } = props;
    const classes = mergeClasses(defaultClasses, props.classes);
    const elementType = plain ? 'span' : 'label';
    const labelProps = {
        ...restProps,
        className: classes.root
    };

    return React.createElement(elementType, labelProps, children);
};

Label.propTypes = {
    children: node,
    classes: shape({
        root: string
    }),
    plain: bool
};

export default Label;
