import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const ButtonAppBar:React.FC = () => {
    return (
        <div >
            <AppBar position="static">
                <Toolbar>
                    <ul>
                        <li><a href="/">Список дел</a></li>
                        <li><a href="/">Информация</a></li>
                    </ul>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default ButtonAppBar;