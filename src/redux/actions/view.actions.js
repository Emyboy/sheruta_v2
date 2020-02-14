import { TOGGLE_LIGHT_BOX, TOGGLE_NAVBAR } from '.'

export const toggleLightBox = (lightBoxState, index) => {
    console.log('showing');
    return {
        type: TOGGLE_LIGHT_BOX,
        payload: { lightBoxState: !lightBoxState, index}
    }
}

export const toggleNavbar = boolen => {
    return {
        type: TOGGLE_NAVBAR,
        payload: boolen
    }
}
