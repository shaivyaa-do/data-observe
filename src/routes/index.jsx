import { useRoutes } from 'react-router-dom';
import { PATHS } from './paths';

// Pages
import Home from '../pages/Home';
import Company from '../pages/Company';
import People from '../pages/People';
import Contact from '../pages/Contact';
import Datasense from '../pages/Datasense';
import Cloud from '../pages/Expertise/Cloud';
import Databi from '../pages/Expertise/Databi';
import Devops from '../pages/Expertise/Devops';
import Talent from '../pages/Expertise/Talent';
import Application from '../pages/Expertise/Application';
import Aiml from '../pages/Expertise/Aiml';
import Dataeng from '../pages/Expertise/Dataeng';
import Industries from '../pages/Industries/LifeSciences';
import Gaming from '../pages/Industries/Gaming';
import Media from '../pages/Industries/Media';
import MediaEntertainment from '../pages/Industries/MediaEntertainment';
import BlogsRedirect from '../pages/BlogsRedirect';
import CasestudiesRedirect from '../pages/CasestudiesRedirect';
import Ebooks from '../pages/Ebooks';
import Genai from '../pages/Expertise/Genai';
import Allinsights from '../pages/Allinsights';
import Datacharts from '../pages/Datacharts';
import Domonitor from '../pages/Domonitor';
import Doprompt from '../pages/Doprompt';
import ProductLanding from '../pages/ProductLanding';
import Indredirect from '../pages/Indredirect';
import Expredirect from '../pages/Expredirect';
import DOCaliber from '../pages/DOCaliber';
import DOBase from '../pages/DOBase';
import DOMetrics from '../pages/DOMetrics';
import Observability from '../pages/Observability';
import { lazy } from 'react';
const FinancialServices = lazy(() => import("../pages/Industries/FinancialServices"));
const TravelHospitality = lazy(() => import("../pages/Industries/TravelHospitality"));
import CPG from '../pages/Industries/CPG';
import IndustriesHub from '../pages/Industries/IndustriesHub';

export default function Router() {
    return useRoutes([
        { path: PATHS.HOME, element: <Home /> },
        { path: PATHS.COMPANY, element: <Company /> },
        { path: PATHS.PEOPLE, element: <People /> },
        { path: PATHS.CONTACT, element: <Contact /> },

        { path: PATHS.DATAINSIGHTS, element: <Datasense /> },
        { path: PATHS.CLOUD, element: <Cloud /> },
        { path: PATHS.DATABI, element: <Databi /> },
        { path: PATHS.DEVOPS, element: <Devops /> },
        { path: PATHS.TALENT, element: <Talent /> },
        { path: PATHS.APPLICATION, element: <Application /> },
        { path: PATHS.AIML, element: <Aiml /> },
        { path: PATHS.DATAENG, element: <Dataeng /> },
        { path: PATHS.INDUSTRIES, element: <Industries /> },
        { path: PATHS.GAMING, element: <Gaming /> },
        { path: PATHS.TRAVEL_HOSPITALITY, element: <TravelHospitality /> },
        { path: PATHS.MEDIA, element: <Media /> },
        { path: PATHS.MEDIA_ENTERTAINMENT, element: <MediaEntertainment /> },
        { path: PATHS.BLOG_DETAIL, element: <BlogsRedirect /> },
        { path: PATHS.CASESTUDIES, element: <CasestudiesRedirect /> },
        { path: PATHS.EBOOKS, element: <Ebooks /> },
        { path: PATHS.GENAI, element: <Genai /> },
        { path: PATHS.ALLINSIGHTS, element: <Allinsights /> },
        { path: PATHS.DATACHARTS, element: <Datacharts /> },
        { path: PATHS.DATAMONITOR, element: <Domonitor /> },
        { path: PATHS.DATAPROMPT, element: <Doprompt /> },
        { path: PATHS.PRODUCT_LANDING, element: <ProductLanding /> },
        { path: PATHS.INDUSTRIES_LANDING, element: <Indredirect /> },
        { path: PATHS.EXPERTISE_LANDING, element: <Expredirect /> },
        { path: PATHS.CALIBER, element: <DOCaliber /> },
        { path: PATHS.BASE, element: <DOBase /> },
        { path: PATHS.METRICS, element: <DOMetrics /> },
        { path: PATHS.DO360, element: <Observability /> },
        { path: PATHS.FINANCIAL_SERVICES, element: <FinancialServices /> },
        { path: PATHS.TRAVEL_HOSPITALITY, element: <TravelHospitality /> },
        { path: PATHS.CPG, element: <CPG /> },
        { path: PATHS.INDUSTRIES_HUB, element: <IndustriesHub /> },
    ]);
}
