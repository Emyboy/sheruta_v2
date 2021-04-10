


export const setAuthState = state => dispatch => {
    dispatch({
        type: 'SET_AUTH_STATE',
        payload: state
    })

}

export const logout = () => dispatch => {
    localStorage.clear();
    sessionStorage.clear();
    dispatch({
        type: 'LOGOUT'
    })
}

