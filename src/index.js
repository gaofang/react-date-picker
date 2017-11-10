/**
 * Created by zgf on 17/10/9.
 */
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';


import './common.css';

const routes = {
    path: '/',
    indexRoute: { onEnter: (nextState, replace) => replace('react-date-picker') },
    childRoutes: [
        {
            path: 'react-date-picker',
            getComponents(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./components/Home/Home').default);
                });
            }
        }
    ]
};

ReactDOM.render(
    <AppContainer>
        <Router history={browserHistory} routes={routes}/>
    </AppContainer>,
    document.getElementById('approot')
);

if (process.env.NODE_ENV === 'dev') {
    /* eslint-disable */
    if (module.hot) {
        module.hot.accept(
            [
                // './components/ReportList/ReportListContainer',
                './components/Home/Home' // 报告进度
            ], () => {
                // If you use Webpack 2 in ES modules mode, you can
                // use <App /> here rather than require() a <NextApp />.
                // require('./components/ReportList/ReportListContainer');
                require('./components/Home/Home'); // 报告进度
                ReactDOM.render(
                    <AppContainer>
                        <Router history={browserHistory}>
                        </Router>
                    </AppContainer>,
                    document.getElementById('approot')
                );
            });
    }
}