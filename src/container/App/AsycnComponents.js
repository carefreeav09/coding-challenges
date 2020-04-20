import loadable from 'react-loadable';
import LoadingComponent from '../../layout/loading';

export const AsycnAppLayout = loadable({
    loader: () => import('../../layout/layout'),
    loading: LoadingComponent,
});

export const AsyncHome = loadable({
    loader: () => import('../../components/Home'),
    loading: LoadingComponent
})

export const AysncDepartureTimes = loadable({
    loader: () => import('../../components/DepartureTimesNew'),
    loading: LoadingComponent
})

export const AsyncSAnFransiscoMovies = loadable({
    loader: () => import('../../components/SanFransiscoMovies'),
    loading: LoadingComponent
})