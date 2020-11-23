import React, { memo, forwardRef } from 'react';

const Plain = memo(forwardRef((props, ref) => <div {...props} ref={ref} />));

export default Plain;
