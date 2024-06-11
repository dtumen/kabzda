export type ActionType = {
    type: string
}

export const SET_COLLAPSED = 'SET-COLLAPSED';

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType  => {
    switch (action.type) {
        case SET_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            };
        default:
            throw new Error("I don't understand this action type");
    }
}