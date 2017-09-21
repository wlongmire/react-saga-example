import {
    RXContainer,
    Treatment

} from './components';
import {reducer} from './reducer';
import {root} from './sagas';

export const Reducers = {
    root: reducer
}

export const Components = {
    RXContainer,
    Treatment
}

export const Sagas = {
    root
}