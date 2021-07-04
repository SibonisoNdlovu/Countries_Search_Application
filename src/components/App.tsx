import React from 'react';
import { connect } from 'react-redux';
import AppState from '../redux/state/AppState';
import NavigationBar from './NavigationBar/NavigationBar';
import CountriesListState from '../redux/state/CountriesListState';
import CountriesListContainer from './Countries/CountriesListContainer';
import CountrySearch from './Countries/CountrySearch';
import { getCountries, searchCountries } from '../redux/actions/CountriesListActionCreators';
import { play } from '../redux/actions/SlotActionsCreators';
import Slot from '../components/Slot/Slot';


interface IAppProps {
  getCountries(): void,
  searchCountries(term: string): void,
  countriesList: CountriesListState,
  play(): string,
  results: any
}
interface State {
  isSelectedCharacterModalOpen: boolean,
  balance: number,
  countriesList:CountriesListState,
  asc:boolean
}
export class App extends React.Component<IAppProps, State> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { isSelectedCharacterModalOpen: false, balance: 20, countriesList: props.countriesList, asc: true };
  }

  componentDidMount = () => {
    if(this.props.countriesList.countries.length === 0){
      this.props.getCountries();
    }
      this.props.play();
  }

  spin = () => {
    this.props.play();
    this.setState({balance: this.state.balance - 1 + parseInt(this.props.results.results.CoinsWon)})
  }

  reset = () => {
    this.setState({balance: 20})
  }

  sortByCountryName = () => {
    var newList=  this.state.countriesList;
    var dir = this.state.asc;

    if(!this.state.asc){
      this.props.countriesList.countries
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((item, i) => newList.countries.push(item));
      dir = true;
    } else {
      this.props.countriesList.countries
      .sort((a, b) => b.name.localeCompare(a.name))
      .map((item, i) => newList.countries.push(item));
      dir= false;
    }

    
    this.setState({countriesList:newList, asc:dir});
  }

  public render() {
    const { searchCountries, countriesList } = this.props;
    var winCombination = this.props.results.results;
    let balance = this.state.balance;
    return (
      <div className="app-container">
        <NavigationBar>
          <CountrySearch onSearchCountry={searchCountries} />
          <button
                className="btn btn-secondary my-2 my-sm-0"
                onClick={this.sortByCountryName}
                style={{marginRight:'10px'}}>Sort By Country Name
              </button>
          <div>
            {
             balance>0?
              (<button
                className="btn btn-secondary my-2 my-sm-0"
                onClick={this.spin}
                style={{marginRight:'10px'}}>Spin
              </button>): (<button
                className="btn btn-secondary my-2 my-sm-0"
                onClick={this.reset}
                style={{marginRight:'10px'}}>Reset
              </button>)
            }
          <label className="input-label">{"Balance: "+this.state.balance}</label>
          <label className="input-label">{JSON.stringify(winCombination.SpinResult)}</label>
          {
             this.props.results.results.CoinsWon>0?
              "  YOU WON!" + this.props.results.results.CoinsWon + "COINS" : " "
            }
          </div>
        </NavigationBar>

        <CountriesListContainer
          countriesList={countriesList}/>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    countriesList: state.countriesListState,
    results: state.slotState
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getCountries: () => dispatch(getCountries()),
    searchCountries: (term: string) => dispatch(searchCountries(term)),
    play: () => dispatch(play())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
