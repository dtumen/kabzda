import React, {memo} from 'react';

type PropsType = {
    handleUsersFilterAll: () => void;
}
export const Callback = ({handleUsersFilterAll}: PropsType) => {
    console.log('Callback render!');
    return (
        <div>
            Component Callback
            <button onClick={handleUsersFilterAll}>All</button>
        </div>
    );
};

export const MemoCallback = memo(Callback);