import React, {Component} from 'react';

//import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Query = gql`
{
  pokemon(id: "UG9rZW1vbjowMDE=", name: "Bulbasaur") {
    id
    number
    name
    attacks {
      special {
        name
        type
        damage
      }
    }
  }
}`;
const linkdata=graphql(Query);

	class listPoke extends React.Component {

	render(){
		let { data } = this.props
		if (data.loading) {
   			 return (<div>Loading..</div>)
   		}

		return (
		<div> 
		{ data.pokemon.map( (id, name) => <li key={data.id}> {data.name} </li> ) }
		</div>
		)
		
	}
}

export default (linkdata)(listPoke)

