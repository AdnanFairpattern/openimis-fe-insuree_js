import React, { Component } from "react";
import _debounce from "lodash/debounce";
import { withTheme, withStyles } from "@material-ui/core/styles";
import { injectIntl } from "react-intl";
import {Helmet} from "react-helmet";
import { Checkbox, FormControlLabel, Grid, Slider } from "@material-ui/core";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {
  withModulesManager,
  formatMessage,
  Contributions,
  PublishedComponent,
  ControlledField,
  TextInput,
} from "@openimis/fe-core";

const styles = (theme) => ({
  dialogTitle: theme.dialog.title,
  dialogContent: theme.dialog.content,
  form: {
    padding: 0,
  },
  item: {
    padding: theme.spacing(1),
  },
  paperDivider: theme.paper.divider,
});

const INSUREE_FILTER_CONTRIBUTION_KEY = "insuree.Filter";

class InsureeFilter extends Component {
  state = {
    showHistory: false,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.filters["showHistory"] !== this.props.filters["showHistory"] &&
      !!this.props.filters["showHistory"] &&
      this.state.showHistory !== this.props.filters["showHistory"]["value"]
    ) {
      this.setState((state, props) => ({ showHistory: props.filters["showHistory"]["value"] }));
    }
  }

  debouncedOnChangeFilter = _debounce(
    this.props.onChangeFilters,
    this.props.modulesManager.getConf("fe-insuree", "debounceTime", 800),
  );

  _filterValue = (k) => {
    const { filters } = this.props;
    return !!filters && !!filters[k] ? filters[k].value : null;
  };

  _onChangeShowHistory = () => {
    let filters = [
      {
        id: "showHistory",
        value: !this.state.showHistory,
        filter: `showHistory: ${!this.state.showHistory}`,
      },
    ];
    this.props.onChangeFilters(filters);
    this.setState((state) => ({
      showHistory: !state.showHistory,
    }));
  };

  render() {
    const { intl, classes, filters, onChangeFilters } = this.props;
    return (
      <>
      <div className="Breadcrumbs">

        <a style={{'color':'#000'}}><a href="/front/home">Home</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Create Insurance <i class="fa fa-angle-double-right" aria-hidden="true"></i> Search</a>
      
        </div>
    
 
      <Grid container className={classes.form}>

        <ControlledField
          module="insuree"
          id="InsureeFilter.chfId"
          field={
            <Grid item xs={6} className={classes.item}>
              <TextInput
                module="insuree"
                label="Insuree.chfId"
                name="chfId"
                value={this._filterValue("chfId")}
                onChange={(v) =>
                  this.debouncedOnChangeFilter([
                    {
                      id: "chfId",
                      value: v,
                      filter: `chfId_Istartswith: "${v}"`,
                    },
                  ])
                }
              />
            </Grid>
          }
        />
        <ControlledField
          module="insuree"
          id="InsureeFilter.lastName"
          field={
            <Grid item xs={6} className={classes.item}>
              <TextInput
                module="insuree"
                label="Insuree.lastName"
                name="lastName"
                value={this._filterValue("lastName")}
                onChange={(v) =>
                  this.debouncedOnChangeFilter([
                    {
                      id: "lastName",
                      value: v,
                      filter: `lastName_Icontains: "${v}"`,
                    },
                  ])
                }
              />
            </Grid>
          }
        />
        <ControlledField
          module="insuree"
          id="InsureeFilter.givenName"
          field={
            <Grid item xs={6} className={classes.item}>
              <TextInput
                module="insuree"
                label="Insuree.otherNames"
                name="givenName"
                value={this._filterValue("givenName")}
                onChange={(v) =>
                  this.debouncedOnChangeFilter([
                    {
                      id: "givenName",
                      value: v,
                      filter: `otherNames_Icontains: "${v}"`,
                    },
                  ])
                }
              />
            </Grid>
          }
        />
     
      
            <ControlledField
              module="insuree"
              id="InsureeFilter.gender"
              field={
                <Grid item xs={6} className={classes.item}>
                  <PublishedComponent
                    pubRef="insuree.InsureeGenderPicker"
                    withNull={true}
                    value={this._filterValue("gender")}
                    onChange={(v) =>
                      onChangeFilters([
                        {
                          id: "gender",
                          value: v,
                          filter: !!v ? `gender_Code: "${v}"` : null,
                        },
                      ])
                    }
                  />
                </Grid>
              }
            />
            <ControlledField
              module="insuree"
              id="InsureeFilter.maritalStatus"
              field={
                <Grid item xs={6} className={classes.item}>
                  <PublishedComponent
                    pubRef="insuree.InsureeMaritalStatusPicker"
                    value={this._filterValue("maritalStatus")}
                    onChange={(v) =>
                      onChangeFilters([
                        {
                          id: "maritalStatus",
                          value: v,
                          filter: `marital: "${v}"`,
                        },
                      ])
                    }
                  />
                </Grid>
              }
            />
       
    
        <ControlledField
          module="insuree"
          id="InsureeFilter.email"
          field={
            <Grid item xs={6} className={classes.item}>
              <TextInput
                module="insuree"
                label="Insuree.email"
                name="email"
                value={this._filterValue("email")}
                onChange={(v) =>
                  this.debouncedOnChangeFilter([
                    {
                      id: "email",
                      value: v,
                      filter: `email_Icontains: "${v}"`,
                    },
                  ])
                }
              />
            </Grid>
          }
        />
        <ControlledField
          module="insuree"
          id="InsureeFilter.phone"
          field={
            <Grid item xs={6} className={classes.item}>
              <TextInput
                module="insuree"
                label="Insuree.phone"
                name="phone"
                value={this._filterValue("phone")}
                onChange={(v) =>
                  this.debouncedOnChangeFilter([
                    {
                      id: "phone",
                      value: v,
                      filter: `phone_Icontains: "${v}"`,
                    },
                  ])
                }
              />
            </Grid>
          }
        />





        <ControlledField
          module="insuree"
          id="InsureeFilter.dob"
          field={
           
              <>
                <Grid item xs={6} className={classes.item}>
                  <PublishedComponent
                    pubRef="core.DatePicker"
                    value={this._filterValue("dobFrom")}
                    module="insuree"
                    label="Insuree.dobFrom"
                    onChange={(d) =>
                      onChangeFilters([
                        {
                          id: "dobFrom",
                          value: d,
                          filter: `dob_Gte: "${d}"`,
                        },
                      ])
                    }
                  />
                </Grid>
                <Grid item xs={6} className={classes.item}>
                  <PublishedComponent
                    pubRef="core.DatePicker"
                    value={this._filterValue("dobTo")}
                    module="insuree"
                    label="Insuree.dobTo"
                    onChange={(d) =>
                      onChangeFilters([
                        {
                          id: "dobTo",
                          value: d,
                          filter: `dob_Lte: "${d}"`,
                        },
                      ])
                    }
                  />
                </Grid>
              </>
          
          }
        />









        <Grid item xs={6}>
          <Grid container>
            <ControlledField
              module="insuree"
              id="InsureeFilter.photoStatus"
              field={
                <Grid item xs={12} className={classes.item}>
                  <PublishedComponent
                    pubRef="insuree.PhotoStatusPicker"
                    value={this._filterValue("photoStatus")}
                    onChange={(s) =>
                      onChangeFilters([
                        {
                          id: "photoStatus",
                          value: s,
                          filter: `photo_Isnull: ${s === "without"}`,
                        },
                      ])
                    }
                  />
                </Grid>
              }
            />
            <ControlledField
              module="insuree"
              id="InsureeFilter.showHistory"
              field={
                <Grid item xs={12} className={classes.item}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={this.state.showHistory}
                        onChange={(e) => this._onChangeShowHistory()}
                      />
                    }
                    label={formatMessage(intl, "insuree", "InsureeFilter.showHistory")}
                  />
                </Grid>
              }
            />
          </Grid>
        </Grid>
        <Contributions
          filters={filters}
          onChangeFilters={onChangeFilters}
          contributionKey={INSUREE_FILTER_CONTRIBUTION_KEY}
        />
      </Grid>

      </>
    );
  }
}

export default withModulesManager(injectIntl(withTheme(withStyles(styles)(InsureeFilter))));
