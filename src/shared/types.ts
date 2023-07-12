export enum SelectedPage {
    Home = "home",
    Contract = "contract",
    Tenant = "tenant",
    Cars = "cars",
  }
  
  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }
  
  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }