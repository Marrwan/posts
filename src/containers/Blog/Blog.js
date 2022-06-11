    import React, { Component, Suspense } from 'react';
    import {  Routes, NavLink,  } from 'react-router-dom';
    import {Route, Navigate} from 'react-router';
    import FullPost from '../FullPost/FullPost';
    // import NewPost from '../NewPost/NewPost';

    // import asyncComponent from '../../hoc/asyncComponent';
    import Posts from '../Posts/Posts';
    import './Blog.css';


    // const NewPost = asyncComponent(() => {
    //     return import('../NewPost/NewPost');
    // }
    // );

    const NewPost = React.lazy(() => import('../NewPost/NewPost'));

    class Blog extends Component {
    
        render () {
            return (
                <div className="Blog">
                    <header>
                    <nav>
                            <ul>
                                    <li>
                                        <NavLink end  to="/">Home</NavLink >
                                    </li>
                                    <li>
                                        <NavLink end  to= "/new">NewPost</NavLink >
                                    </li>
                                </ul>

                    </nav>
                    </header>
            {/* <Posts/> */}
            <Routes>
                    <Route path="/" element={<Posts/>} />
                    <Route path="/new" element={<Suspense fallback={<div>Loading...</div>}>
        <NewPost />
      </Suspense>}/>
                    <Route path="/posts/:id" element={<FullPost/>}  />
                    <Route path="/*"  element={<Navigate replace to="/new" />} />
            </Routes>
                    {/* <section>
                        <FullPost id={this.state.selectedId} />
                    </section>
                    <section>
                        <NewPost />
                    </section> */}
                </div>
            );
        }
    }

    export default Blog;