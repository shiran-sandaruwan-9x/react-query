import React from 'react';
import HomeComp from "./component/HomeComp";
import CustomNavBar from "./component/nav-bar/CustomNavBar";
import {Route, Routes} from "react-router-dom";
import SuperGirlHerosComp from "./component/SuperGirlHerosComp";
import SuperHeroesComp from "./component/SuperHeroesComp";


class App extends React.Component {

    render() {
        return (
            <div>
                <CustomNavBar/>
                <Routes>
                    <Route path='/' element={<HomeComp/>}/>
                    <Route path='/super-girl' element={<SuperGirlHerosComp/>}/>
                    <Route path='/super-hero' element={<SuperHeroesComp/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;