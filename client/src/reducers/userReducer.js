export default function usersReducer(state = '', { type, payload }) {
    switch (type) {
        case 'updateUser':
            return payload;
    }
    return state;
}