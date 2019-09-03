import SubMain from "./SubMain"
import makeStyles from '@material-ui/styles/makeStyles'

import IcHome from '../../svg/ic_home_black_24px.svg'
import IcNews from '../../svg/newspaper.svg'
import IcStartUp from '../../svg/businessman-with-doubts.svg'
import IcBusiness from '../../svg/briefcase-frontal-view.svg'
import IcEducation from '../../svg/books-stack-of-three.svg'
import IcTravel from '../../svg/travel.svg'
import IcLive from '../../svg/heart-with-lifeline-variant.svg'
import IcVideo from '../../svg/video-player.svg'
import IcEvent from '../../svg/event-calendar-symbol.svg'

import HomeIcon from '@material-ui/icons/Home';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';


import React from "react";
function Main() {
    const fontSize = 27;

    return (
      <div>
          <SubMain active name={"HOME"}>
              <HomeIcon style={{fontSize : fontSize}}/>
          </SubMain>
          <SubMain name={"NEWS"}>
              <NewReleasesIcon  style={{fontSize : fontSize}}/>
          </SubMain>
          <SubMain name={"STARTUPS"}>
              <RecordVoiceOverIcon style={{fontSize : fontSize}} />
          </SubMain>
          <SubMain name={"BUSINESS"}>
              <BusinessCenterIcon style={{fontSize : fontSize}} />
          </SubMain>
          <SubMain name={"EDUCATION"}>
              <ImportContactsIcon style={{fontSize : fontSize}} />
          </SubMain>
          <SubMain name={"TRAVEL"}>
              <DirectionsBusIcon  style={{fontSize : fontSize}}/>
          </SubMain>
          <SubMain name={"LIVE"}>
              <FavoriteBorderIcon  style={{fontSize : fontSize}} />
          </SubMain>
          <SubMain name={"VIDEO"}>
              <OndemandVideoIcon style={{fontSize : fontSize}} />
          </SubMain>
          <SubMain name={"EVENTS"}>
              <EventAvailableIcon  style={{fontSize : fontSize}}/>
          </SubMain>
      </div>
    );
}
export default Main;