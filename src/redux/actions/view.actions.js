import { TOGGLE_LIGHT_BOX } from '.'

export const toggleLightBox = (lightBoxState, index) => {
    console.log('showing');
    return {
        type: TOGGLE_LIGHT_BOX,
        payload: { lightBoxState: !lightBoxState, index}
    }
}
