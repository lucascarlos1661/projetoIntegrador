export const initialState = {
    id: '',
    registration: '',
    cpf: '',
    name: '',
    phone: '',
    email: '',
    avatar: '',
    admin: '',
}

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'setUser':
            return {
                ...state,
                id: action.payload.id,
                registration: action.payload.registration,
                cpf: action.payload.cpf,
                name: action.payload.name,
                phone: action.payload.phone,
                email: action.payload.email,
                avatar: action.payload.avatar,
                admin: action.payload.admin
            }
        case 'setAvatar':
            return {
                ...state,
                avatar: action.payload.avatar
            }
            break
        default:
            return state
    }

}