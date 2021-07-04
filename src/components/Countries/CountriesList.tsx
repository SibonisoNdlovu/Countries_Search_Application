import React, { FunctionComponent } from 'react';
import Country from '../../api/model/Country';
import './CountriesList.css';

interface Props {
  countries: Country[];
}
const CountriesList: FunctionComponent<Props> = props => {

  const { countries } = props;
  return (
    <ul className="list-group">
      {countries.map(country =>
        <li key={country.name}
          className="list-group-item">
          {country.name}
        </li>
      )}
    </ul>
  );
};

export default CountriesList;
