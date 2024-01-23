
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { DisplayMode } from "@microsoft/sp-core-library";

export interface IDocumentsLinksAccordionProps {
  title: string;
  listId:string;
  listBaseTemplate:number;
  fieldName:string;
  locale:string;
  themeVariant: IReadonlyTheme | undefined;
  onConfigure: () => void;

}
