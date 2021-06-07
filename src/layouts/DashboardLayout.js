import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Header, SidebarNav, Footer, PageContent, PageAlert, Page} from '../vibe';
import Logo from '../assets/images/vibe-logo.svg';
import nav from '../_nav';
import routes from '../views';
import ContextProviders from '../vibe/components/utilities/ContextProviders';
import handleKeyAccessibility, {handleClickAccessibility} from '../vibe/helpers/handleTabAccessibility';
import {Button, Card, CardFooter, CardHeader} from "reactstrap";
import firebase, {provider} from "../vibe/helpers/handleAuthWithFirebaseAndAAD";

const MOBILE_SIZE = 992;

export const DashboardLayoutContext = React.createContext();

export default class DashboardLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarCollapsed: false,
            isMobile: window.innerWidth <= MOBILE_SIZE,
        };

        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    onLogin() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
                sessionStorage.setItem('user', JSON.stringify(user))
                console.log(this.state.user);
            } else {
                firebase.auth().signInWithRedirect(provider);
            }
        });
    };

    onLogout() {
        firebase.auth().signOut();
        this.setState(prevState => {
            delete prevState.user;
            return {...prevState,}
        })
        sessionStorage.clear();
        console.log(this.state)
    }

    handleResize = () => {
        if (window.innerWidth <= MOBILE_SIZE) {
            this.setState({sidebarCollapsed: false, isMobile: true});
        } else {
            this.setState({isMobile: false});
        }
    };

    componentDidUpdate(prev) {
        if (this.state.isMobile && prev.location.pathname !== this.props.location.pathname) {
            this.toggleSideCollapse();
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        document.addEventListener('keydown', handleKeyAccessibility);
        document.addEventListener('click', handleClickAccessibility);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    toggleSideCollapse = () => {
        this.setState(prevState => ({sidebarCollapsed: !prevState.sidebarCollapsed}));
    };

    render() {
        const {sidebarCollapsed} = this.state;
        const sidebarCollapsedClass = sidebarCollapsed ? 'side-menu-collapsed' : '';
        return (
            <>

                {sessionStorage.getItem('user') ?
               /* {!sessionStorage.getItem('user') ?*/
                    <div className='login-page-wrapper'>
                        <Card className='login-wrap'>
                            <CardHeader>Authentication required!</CardHeader>
                            <CardFooter>
                                <Button className='btn-block login-button' color='warning'
                                        onClick={this.onLogin}>login</Button>
                                <hr/>
                                <Button className='btn-block login-button' color='info'
                                        onClick={this.onLogout}>logout</Button>
                            </CardFooter>
                        </Card>
                    </div> :
                    <ContextProviders>
                        <div className={`app ${sidebarCollapsedClass}`}>
                            <PageAlert/>
                            <div className="app-body">
                                <SidebarNav
                                    nav={nav}
                                    logo={Logo}
                                    logoText="VIBE."
                                    isSidebarCollapsed={sidebarCollapsed}
                                    toggleSidebar={this.toggleSideCollapse}
                                    {...this.props}
                                />
                                <Page>
                                    <Header
                                        toggleSidebar={this.toggleSideCollapse}
                                        isSidebarCollapsed={sidebarCollapsed}
                                        routes={routes}
                                        {...this.props}
                                    >
                                    </Header>
                                    <DashboardLayoutContext.Provider value={{
                                        sidebarCollapsed: this.state.sidebarCollapsed,
                                        toggleSideCollapse: this.toggleSideCollapse
                                    }}>
                                        <PageContent>
                                            <Switch>
                                                <Route exact path="/">
                                                    <Redirect to="/home"/>
                                                </Route>
                                                {routes.map((page, key) => (
                                                    <Route path={page.path} component={page.component} key={key}/>
                                                ))}
                                            </Switch>
                                        </PageContent>
                                    </DashboardLayoutContext.Provider>
                                </Page>
                            </div>
                            <Footer>
                            <span className="ml-auto hidden-xs">Made with{' '}
                                <span role="img" aria-label="taco">☕</span>
                            </span>
                            </Footer>
                        </div>
                    </ContextProviders>
                }
            </>
        );
    }
}
