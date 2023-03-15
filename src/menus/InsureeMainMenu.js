import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { ScreenShare,VerifiedUser, AssignmentInd, GroupAdd, People, Person, Security, FindInPage,  LocalHospital,  HealingOutlined} from "@material-ui/icons";
import PolicyIcon from '@mui/icons-material/Policy';
import { formatMessage, MainMenuContribution, withModulesManager } from "@openimis/fe-core";
import { RIGHT_FAMILY, RIGHT_FAMILY_ADD, RIGHT_INSUREE } from "../constants";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import PaidIcon from '@mui/icons-material/Paid';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PreviewIcon from '@mui/icons-material/Preview';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AssessmentIcon from '@mui/icons-material/Assessment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReportIcon from '@mui/icons-material/Report';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// first do

const INSUREE_MAIN_MENU_CONTRIBUTION_KEY_HEALTH_INSUREE = "insuree.mainMenuHealthinsuree";
const INSUREE_MAIN_MENU_CONTRIBUTION_KEY_LIFE_INSUREE = "insuree.mainMenuLifeinsuree";
const INSUREE_MAIN_MENU_CONTRIBUTION_KEY_GROUP = "insuree.mainMenuGroup";
const INSUREE_MAIN_MENU_CONTRIBUTION_KEY_CLAIM = "insuree.mainClaimModule";
const INSUREE_MAIN_MENU_CONTRIBUTION_KEY_UNDERWRITING = "insuree.mainUnderwritingModule";
const INSUREE_MAIN_MENU_CONTRIBUTION_KEY_AGENT = "insuree.mainAgentsModule";
const INSUREE_MAIN_MENU_CONTRIBUTION_KEY_INSUREEPOLICY = "insuree.mainInsurancePolicies";

const INSUREE_MAIN_MENU_CONTRIBUTION_KEY_INSUREE_MANAGEMENT = "insuree.mainMenuInsureeManagement";


const INSUREE_MAIN_MENU_CONTRIBUTION_KEY = "insuree.MainMenu";
const INSUREE_MAIN_MENU_CONTRIBUTION_KEY_COMMON_SETUP = "insuree.mainMenuCommonSetup";



class InsureeMainMenu extends Component {
  render() {
    const { modulesManager, rights } = this.props;
    // 2nd do
    let entries = [];
    let common=[];
    let group_insuree=[];
    let Health_insuree=[];
    let life_insuree=[]
    let claim_module=[]
    let underwriting_module=[]
    let agentmodule=[]
    let policymodule=[]
    let INSUREE_MANAGEMENT=[]
 



    if (rights.includes(RIGHT_INSUREE)) {
      common.push({
        text: formatMessage(this.props.intl, "insuree", "menu.insurees"),
        icon: <PolicyIcon
         />,
        route: "/" + modulesManager.getRef("insuree.route.insurees"),
      });
    }


    // HEALTH INSUREE ROUTE


 

  

 

    if (rights.includes(RIGHT_INSUREE)) {
      Health_insuree.push({
        text: formatMessage(this.props.intl, "insuree", "menu.MedicalItemSetup"),
        icon: <VaccinesIcon
         />,
        route: "/medical/medicalItems",
      });
    }
    if (rights.includes(RIGHT_INSUREE)) {
      Health_insuree.push({
        text: formatMessage(this.props.intl, "insuree", "menu.MedicalItemPriceSetup"),
        icon: <FactCheckIcon
         />,
        route: "/medical/pricelists/items",
      });
    }
    if (rights.includes(RIGHT_INSUREE)) {
      Health_insuree.push({
        text: formatMessage(this.props.intl, "insuree", "menu.MedicalServicesSetup"),
        icon: <MedicalInformationIcon
         />,
        route: "/medical/medicalServices",
      });
    }

    if (rights.includes(RIGHT_INSUREE)) {
      Health_insuree.push({
        text: formatMessage(this.props.intl, "insuree", "menu.MedicalServicesPriceSetup"),
        icon: <HealingOutlined
         />,
        route: "/medical/pricelists/services",
      });
    }


    if (rights.includes(RIGHT_INSUREE)) {
      Health_insuree.push({
        text: formatMessage(this.props.intl, "insuree", "menu.AddHealthFacilitie"),
        icon: <LocalHospital
         />,
        route: "/location/healthFacilities",
      });
    }

    if (rights.includes(RIGHT_INSUREE)) {
      Health_insuree.push({
        text: formatMessage(this.props.intl, "insuree", "menu.PremiumReceive"),
        icon: <PaidIcon
         />,
        route: "/contribution/contributions",
      });
    }
// LIFE INSUREANCE ROUTE
if (rights.includes(RIGHT_INSUREE)) {
  life_insuree.push({
    text: formatMessage(this.props.intl, "insuree", "menu.PremiumReceive"),
    icon: <PaidIcon
     />,
    route: "/contribution/contributions",
  });
}

if (rights.includes(RIGHT_INSUREE)) {
  life_insuree.push({
    text: formatMessage(this.props.intl, "insuree", "menu.LoanManagement"),
    icon: <CreditScoreIcon
     />,
    route: "#",
  });
}

if (rights.includes(RIGHT_INSUREE)) {
  life_insuree.push({
    text: formatMessage(this.props.intl, "insuree", "menu.LiveDieBenefits"),
    icon: <DoorSlidingIcon
     />,
    route: "#",
  });
}



// claim modele

if (rights.includes(RIGHT_INSUREE)) {
  claim_module.push({
    text: formatMessage(this.props.intl, "insuree", "menu.ManuAddClaim"),
    icon: <CurrencyExchangeIcon
     />,
    route: "/claim/claim",
  });
}

if (rights.includes(RIGHT_INSUREE)) {
  claim_module.push({
    text: formatMessage(this.props.intl, "insuree", "menu.ManuHealthFacilityClaim"),
    icon: <AirlineSeatFlatIcon
     />,
    route: "/claim/healthFacilities",
  });
}

if (rights.includes(RIGHT_INSUREE)) {
  claim_module.push({
    text: formatMessage(this.props.intl, "insuree", "menu.ManuClaimStatusReview"),
    icon: <SocialDistanceIcon
     />,
    route: "/claim/reviews",
  });
}

if (rights.includes(RIGHT_INSUREE)) {
  claim_module.push({
    text: formatMessage(this.props.intl, "insuree", "menu.ManuClaimAnalysisBatchRun"),
    icon: <AssessmentIcon
     />,
    route: "/claim_batch",
  });
}

if (rights.includes(RIGHT_INSUREE)) {
  claim_module.push({
    text: formatMessage(this.props.intl, "insuree", "menu.ManuUnderwritingActivities"),
    icon: <PreviewIcon
     />,
    route: "#",
  });
}

// underwriting_module


if (rights.includes(RIGHT_INSUREE)) {
  underwriting_module.push({
    text: formatMessage(this.props.intl, "insuree", "menu.MedicalCheckup"),
    icon: <HealthAndSafetyIcon
     />,
    route: "#",
  });
}
if (rights.includes(RIGHT_INSUREE)) {
  underwriting_module.push({
    text: formatMessage(this.props.intl, "insuree", "menu.PapersCompliance"),
    icon: <StickyNote2Icon
     />,
    route: "#",
  });
}
if (rights.includes(RIGHT_INSUREE)) {
  underwriting_module.push({
    text: formatMessage(this.props.intl, "insuree", "menu.SubmittdevidenceCrossCheck"),
    icon: <UploadFileIcon
     />,
    route: "#",
  });
}

if (rights.includes(RIGHT_INSUREE)) {
  underwriting_module.push({
    text: formatMessage(this.props.intl, "insuree", "menu.CheckInsureesPaymentStatusEligibility"),
    icon: <FileDownloadDoneIcon
     />,
    route: "#",
  });
}


// Agent module





if (rights.includes(RIGHT_INSUREE)) {
  agentmodule.push({
    text: formatMessage(this.props.intl, "insuree", "menu.mainAgentsDashboard"),
    icon: <DashboardIcon
     />,
    route: "#",
  });
}

if (rights.includes(RIGHT_INSUREE)) {
  agentmodule.push({
    text: formatMessage(this.props.intl, "insuree", "menu.AllInsuranceInfo"),
    icon: <DensitySmallIcon
     />,
    route: "#",
  });
}

if (rights.includes(RIGHT_INSUREE)) {
  agentmodule.push({
    text: formatMessage(this.props.intl, "insuree", "menu.Report"),
    icon: <ReportIcon
     />,
    route: "/tools/reports",
  });
}

// policy module

if (rights.includes(RIGHT_INSUREE)) {
  policymodule.push({
    text: formatMessage(this.props.intl, "insuree", "menu.Policies"),
    icon: <DocumentScannerIcon
     />,
    route: "/policy/policies",
  });
}

if (rights.includes(RIGHT_INSUREE)) {
  policymodule.push({
    text: formatMessage(this.props.intl, "insuree", "menu.PremiumReceive"),
    icon: <PaidIcon
     />,
    route: "/contribution/contributions",
  });
}


if (rights.includes(RIGHT_INSUREE)) {
  policymodule.push({
    text: formatMessage(this.props.intl, "insuree", "menu.PaymentReceivable"),
    icon: <CreditCardIcon
     />,
    route: "/payment/payments",
  });
}

if (rights.includes(RIGHT_INSUREE)) {
  policymodule.push({
    text: formatMessage(this.props.intl, "insuree", "menu.PolicyHolders"),
    icon: <ApartmentIcon
     />,
    route: "/policyHolders",
  });
}



// insuree management
if (rights.includes(RIGHT_INSUREE)) {
  INSUREE_MANAGEMENT.push({
    text: formatMessage(this.props.intl, "insuree", "menu.insureeAdd"),
    icon: <AddModeratorIcon
     />,
    route: "/insuree/insurees",
  });
}

if (rights.includes(RIGHT_INSUREE)) {
  INSUREE_MANAGEMENT.push({
    text: formatMessage(this.props.intl, "insuree", "menu.addFamilyOrGroup"),
    icon: <GroupAdd
     />,
    route: "/insuree/family",
  });
}

if (rights.includes(RIGHT_FAMILY)) {
  INSUREE_MANAGEMENT.push({
    text: formatMessage(this.props.intl, "insuree", "menu.familiesOrGroups"),
    icon: <FindInPage />,
    route: "/" + modulesManager.getRef("insuree.route.families"),
  });
}

// 4th do
      // HEALTH INSUREE key

      Health_insuree.push(
        ...this.props.modulesManager
          .getContribs(INSUREE_MAIN_MENU_CONTRIBUTION_KEY_HEALTH_INSUREE)
          .filter((c) => !c.filter || c.filter(rights)),
      );
// health insuree key end

// life insuree key
Health_insuree.push(
  ...this.props.modulesManager
    .getContribs(INSUREE_MAIN_MENU_CONTRIBUTION_KEY_LIFE_INSUREE)
    .filter((c) => !c.filter || c.filter(rights)),
);
// End life insuree key

    entries.push(
      ...this.props.modulesManager
        .getContribs(INSUREE_MAIN_MENU_CONTRIBUTION_KEY)
        .filter((c) => !c.filter || c.filter(rights)),
    );
// claim modeule

claim_module.push(
  ...this.props.modulesManager
    .getContribs(INSUREE_MAIN_MENU_CONTRIBUTION_KEY_CLAIM)
    .filter((c) => !c.filter || c.filter(rights)),
);


// underwriting
underwriting_module.push(
  ...this.props.modulesManager
    .getContribs(INSUREE_MAIN_MENU_CONTRIBUTION_KEY_UNDERWRITING)
    .filter((c) => !c.filter || c.filter(rights)),
);
// agentmodule
agentmodule.push(
  ...this.props.modulesManager
    .getContribs(INSUREE_MAIN_MENU_CONTRIBUTION_KEY_AGENT)
    .filter((c) => !c.filter || c.filter(rights)),
);



    common.push(
      ...this.props.modulesManager
        .getContribs(INSUREE_MAIN_MENU_CONTRIBUTION_KEY_COMMON_SETUP)
        .filter((c) => !c.filter || c.filter(rights)),
    );


    group_insuree.push(
      ...this.props.modulesManager
        .getContribs(INSUREE_MAIN_MENU_CONTRIBUTION_KEY_GROUP)
        .filter((c) => !c.filter || c.filter(rights)),
    );


    policymodule.push(
      ...this.props.modulesManager
        .getContribs(INSUREE_MAIN_MENU_CONTRIBUTION_KEY_INSUREEPOLICY)
        .filter((c) => !c.filter || c.filter(rights)),
    );
    INSUREE_MANAGEMENT.push(
      ...this.props.modulesManager
        .getContribs(INSUREE_MAIN_MENU_CONTRIBUTION_KEY_INSUREE_MANAGEMENT)
        .filter((c) => !c.filter || c.filter(rights)),
    );
    


    
    // 5th do
    if (!entries.length) return null;
    return (
      <>


<MainMenuContribution
        {...this.props}
        header={formatMessage(this.props.intl, "insuree", "mainMenuInsureeManagement")}
        icon={<PersonAddAltIcon />}
        entries={INSUREE_MANAGEMENT}
      />

{/* insuree policy */}

<MainMenuContribution
        {...this.props}
        header={formatMessage(this.props.intl, "insuree", "mainInsurancePolicies")}
        icon={<AssignmentInd />}
        entries={policymodule}
      />
      
 {/* HEALTH INSUREE ROUTE  */}
 <div className="insuree_icon">
 <MainMenuContribution 
        {...this.props}
        header={formatMessage(this.props.intl, "insuree", "mainMenuHealthinsuree")}
        icon={<VerifiedUser  />}
        
        entries={Health_insuree}
      /> 
      </div>
 {/* End health insuree */}


{/* Start life insuree */}
 
<div className="insuree_icon">
 <MainMenuContribution 
        {...this.props}
        header={formatMessage(this.props.intl, "insuree", "mainMenuLifeinsuree")}
        icon={<SensorOccupiedIcon  />}
        
        entries={life_insuree}
      /> 
      </div>
{/* End life insuree */}


   




  {/* CLAIM MODULE */}
      
  <MainMenuContribution
        {...this.props}
        header={formatMessage(this.props.intl, "insuree", "mainClaimModule")}
        icon={<ScreenShare />}
        entries={claim_module}
      />
{/* underwriting_module */}
<MainMenuContribution
        {...this.props}
        header={formatMessage(this.props.intl, "insuree", "mainUnderwritingModule")}
        icon={<VisibilityIcon />}
        entries={underwriting_module}
      />
{/* agent module */}
<MainMenuContribution
        {...this.props}
        header={formatMessage(this.props.intl, "insuree", "mainAgentsModule")}
        icon={<SupportAgentIcon />}
        entries={agentmodule}
      />


      {/* <MainMenuContribution
        {...this.props}
        header={formatMessage(this.props.intl, "insuree", "mainMenu")}
        icon={<AssignmentInd />}
        entries={entries}
      /> */}
  




  
     
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  rights: !!state.core && !!state.core.user && !!state.core.user.i_user ? state.core.user.i_user.rights : [],
});

export default withModulesManager(injectIntl(connect(mapStateToProps)(InsureeMainMenu)));
