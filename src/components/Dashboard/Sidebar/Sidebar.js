import React from 'react';
import MenuItem from '../../MenuItem/MenuItem';

import { SideBar } from './Sidebar.elements';


const Sidebar = ({ pannel }) => {
    return (
        <SideBar>
            <h3> Navigation</h3>
            <MenuItem
                icon={"https://i.imgur.com/yro9SYX.png"}
                title={"Dashboard"}
                link={"dashboard"}
                pannel={pannel}
            />
            {pannel === 'client' ?
                <>

                    <MenuItem
                        icon={"https://i.imgur.com/c5vQI24.png"}
                        title={"Jobs"}
                        link={"jobs"}
                        pannel={pannel}
                    />
                    <MenuItem
                        icon={"https://i.imgur.com/kY2uhSj.png"}
                        title={"Candidate"}
                        link={"candidate"}
                        pannel={pannel}
                    />
                    <MenuItem
                        icon={"https://i.imgur.com/rOtGThu.png"}
                        title={"Approvals"}
                        link={"approvals"}
                        pannel={pannel}
                    />
                    <MenuItem
                        icon={"https://i.imgur.com/ORJCocB.png"}
                        title={"Reports"}
                        link={"reports"}
                        pannel={pannel}
                    />
                </>
                :
                <>
                    <MenuItem
                        icon={"https://i.imgur.com/mDttune.png"}
                        title={"Resume"}
                        link={"resume"}
                        pannel={pannel}
                    />
                    <MenuItem
                        icon={"https://i.imgur.com/G0AstxE.png"}
                        title={"Iterview"}
                        link={"interview"}
                        pannel={pannel}
                    />
                    <MenuItem
                        icon={"https://i.imgur.com/mItcP2U.png"}
                        title={"Offer"}
                        link={"offer"}
                        pannel={pannel}
                    />

                </>
            }
            { pannel === 'applicant' &&
                <>
                    <h3>Jobs</h3>
                    <MenuItem
                        icon={"https://i.imgur.com/W71XVGk.png"}
                        title={"Applied Jobs"}
                        link={"help-desk"}
                        pannel={pannel}
                    />
                    <MenuItem
                        icon={"https://i.imgur.com/8HF9D7e.png"}
                        title={"Map Jobs"}
                        link={"tutorial"}
                        pannel={pannel}
                    />
                    <MenuItem
                        icon={"https://i.imgur.com/T5SiLTY.png"}
                        title={"Live Jobs"}
                        link={"feedback"}
                        pannel={pannel}
                    />
                </>
            }
            <h3>Support</h3>
            <MenuItem
                icon={"https://i.imgur.com/W71XVGk.png"}
                title={"Help Desk"}
                link={"help-desk"}
                pannel={pannel}
            />
            <MenuItem
                icon={"https://i.imgur.com/WawXJYy.png"}
                title={"Tutorial"}
                link={"tutorial"}
                pannel={pannel}
            />
            <MenuItem
                icon={"https://i.imgur.com/j2FrWNI.png"}
                title={"Feedback"}
                link={"feedback"}
                pannel={pannel}
            />

        </SideBar>
    );
};




export default Sidebar;