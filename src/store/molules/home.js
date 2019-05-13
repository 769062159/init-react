export const types={
    LOAD:'home/LOAD',
    CREATE:'home/CREATE'
}

const defaultState={
    state:null
}

export default reducer=(state=defaultState,action)=>{
    switch (action.type) {
        case types.LOAD:
            return {...state,state:'...'}
        default:
            return state
    }
}

export const actions={
    load:()=>{
        return {
            type:types.LOAD
        }
    },
    create:()=>{
        return {
            type:types.CREATE
        }
    }
}