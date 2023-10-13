import React, {FC} from "react";

const ErrorMessage: FC<{errors? : string}> = ({errors}) => {
    if(!errors) return null
    return (
            <h4 style={{color: 'red', paddingBottom: '10px' }}>
                Required field!!!
            </h4>
    )
}

export default ErrorMessage;