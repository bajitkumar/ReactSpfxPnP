import * as React from 'react';
import styles from './ReactSpFxPnP.module.scss';
import { IReactSpFxPnPProps } from './IReactSpFxPnPProps';

import { TaxonomyPicker, IPickerTerms } from "@pnp/spfx-controls-react/lib/TaxonomyPicker";
import { PeoplePicker } from "@pnp/spfx-controls-react/lib/PeoplePicker";

import { escape } from '@microsoft/sp-lodash-subset';

export default class ReactSpFxPnP extends React.Component<IReactSpFxPnPProps, {}> {
  
  public render(): React.ReactElement<IReactSpFxPnPProps> {
    return (
        <form>
          <div className={styles.reactSpFxPnP}>
            <div className={styles.container}>
              <div className={`ms-Grid-row ms-bgColor-neutralLight ms-fontColor-white ${styles.row}`}>
                <div className="ms-Grid-col ms-u-sm12 block">
                  <TaxonomyPicker
                    allowMultipleSelections={true}
                    termsetNameOrID="Countries"
                    panelTitle="Select Term"
                    label="Taxonomy Picker"
                    context={this.props.context}
                    onChange={this.onTaxPickerChange}
                    isTermSetSelectable={false}
                  />
                </div>
                <div className="ms-Grid-col ms-u-sm8 block">
                  <PeoplePicker
                    context={this.props.context}
                    titleText="People Picker"
                    personSelectionLimit={3}
                    groupName={"Team Site Owners"} // Leave this blank in case you want to filter from all users
                    showtooltip={true}
                    isRequired={true}
                    disabled={false}
                    selectedItems={this._getPeoplePickerItems} />
                </div>
              </div>
            </div>
          </div>
        </form>
      );
    }

    private onTaxPickerChange(terms : IPickerTerms) {
      this.setState({ termKey: terms[0].key.toString() });
      console.log("Terms", terms);
    }
       
    private _getPeoplePickerItems(items: any[]) {
      console.log('Items:', items);
    }
}
