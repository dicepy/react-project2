import React from 'react';
import classes from './MyModal.module.css'
const MyModal = () => {
    return (
        <div className={classes.myModal}>
            <div className={classes.myModalContent}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;