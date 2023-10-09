import React from "react";

const ErrorMessage = ({errors}) => {
    return (
        errors?.image?.message && (
            <h4 style={{color: 'red', paddingBottom: '10px' }}>
                Required field!!!
            </h4>
        )
    )
}

export default ErrorMessage;