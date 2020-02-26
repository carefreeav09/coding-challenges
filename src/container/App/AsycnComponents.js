import loadable from 'react-loadable';
import LoadingComponent from '../../layout/loading';
import layout from '../../layout/layout'

export const AsycnAppLayout = loadable({
    loader: () => import('../../layout/layout'),
    loading: LoadingComponent,
});

export const AsyncHome = loadable({
    loader: () => import('../../components/Home'),
    loading: LoadingComponent
})

export const AysncDepartureTimes = loadable({
    loader: () => import('../../components/DepartureTimes'),
    loading: LoadingComponent
})