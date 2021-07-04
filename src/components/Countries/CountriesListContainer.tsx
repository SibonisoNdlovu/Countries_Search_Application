import React from 'react';
import CountriesListState from '../../redux/state/CountriesListState';
import ProgressBar from '../ProgressBar/ProgressBar';
import Alert, { AlertType } from '../Alert/Alert';
import CountriesList from './CountriesList';

interface ICountriesListContainerProps {
    countriesList: CountriesListState
}
const CountriesListContainer = (props: ICountriesListContainerProps) => {

    const { countriesList } = props;

    if (countriesList.isFetching) {
        return <ProgressBar />
    }
    else {
        if (countriesList.error) {
            return <Alert type={AlertType.DANGER} message={countriesList.error} />
        }
        else {
            return countriesList.countries.length === 0 ?
                <div className="p-2">
                    <span className="font-italic">No countries found.</span>&nbsp;
                    <span role="img" aria-label="doh!">😓</span>
                </div> :
                <CountriesList
                    countries={countriesList.countries}/>
        }
    }
}
export default CountriesListContainer;