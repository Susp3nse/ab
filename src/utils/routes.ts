import HomePage from "../components/HomePage";
import AccountLookup from "../components/AccountLookup";
import QuestForm from "../components/QuestBuilder";
export interface AppRoute {
  path: string;
  label: string;
  exact?: boolean;
  header?: string;
  component: noPropComponent;
}
export type noPropComponent = () => React.JSX.Element | null;

const makeRouteUrl = (url: string) => `AB-list-maker${url}`;

export const routes: AppRoute[] = [
  {
    path: makeRouteUrl("/"),
    label: "Home Page",
    exact: true,
    header: "Home Page",
    component: HomePage,
  },
  {
    path: makeRouteUrl("/wiki-lookup"),
    label: "Account Lookup",
    header: "Account Lookup",
    component: AccountLookup,
  },
  {
    path: makeRouteUrl("/quest-builder"),
    label: "Quest Builder",
    header: "Quest Builder",
    component: QuestForm,
  },
];
