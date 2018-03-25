import React, { Component } from "react";

import "./App.css";

import PageHeader from './components/PageHeader'
import PropertyLine from './components/PropertyLine'
import Pitch from "./components/Pitch";
import UserForum from "./components/UserForum";
const ZOOPLA_LOCATIONS = ["Edinburgh", "Glasgow", "Aberdeen", "Dundee"];

class App extends Component {
  state = {
    hasAnsweredIsApprentice: false,
    isApprentice: false,
    forum: false,
    location: null,
    locationResults: null
  };

  async fetchZooplaResults(location) {
    let results = await fetch(
      `https://crossorigin.me/http://api.zoopla.co.uk/api/v1/property_listings.json?area=${location}&api_key=ngm2y7yqkg2vk7mae4c5z28t&minimum_beds=4&listing_status=rent`,
      {
        headers: {
          origin: 'localhost'
        },
      }
    )

    let json = await results.json();

    this.setState({
      locationResults: json.listing
    });
  }

  render() {
    const {
      hasAnsweredIsApprentice,
      isApprentice,
      location,
      locationResults,
      forum,
    } = this.state;
    return (
      <div className="App">

        <PageHeader />





        {
          !hasAnsweredIsApprentice && (
            <div>
              <Pitch />
              <p className="apprenticeship">Do you want to register ?</p>

              <button
                onClick={() =>
                  this.setState({
                    hasAnsweredIsApprentice: true,
                    isApprentice: true
                  })
                }
              >
                Yes
            </button>
              <button
                onClick={() =>
                  this.setState({
                    hasAnsweredIsApprentice: true,
                    isApprentice: false
                  })
                }
              >
                No
            </button>
            </div>
          )
        }

        {
          hasAnsweredIsApprentice &&
          isApprentice &&
          !forum && (
            <div className="centered">
              <UserForum />
              <button onClick={() =>
                this.setState({
                  hasAnsweredIsApprentice: true,
                  isApprentice: true,
                  forum:true
                })
              }>Submit</button>
            </div>

          )
        }

        {
          hasAnsweredIsApprentice &&
          isApprentice &&
          forum && (
            <div>


              {!location && (
                <div>
                  <p>What location are you looking for?</p>

                  <ul>
                    {ZOOPLA_LOCATIONS.map(z => (
                      <li onClick={() => this.fetchZooplaResults(z)}>{z}</li>
                    ))}
                  </ul>
                </div>
              )}

              {locationResults && (
                <div>
                  You selected got location results:
                  <ul>
                    {locationResults

                      .sort((a, b) => a.price / a.num_bedrooms - b.price / b.num_bedrooms)
                      .map(r => <PropertyLine address={r.displayable_address} bedrooms={r.num_bedrooms} price={r.price} />)}
                  </ul>
                </div>
              )}
            </div>
          )
        }

        {
          hasAnsweredIsApprentice &&
          !isApprentice && (
            <div>
              <p>
                You did not want to be <strong>not</strong> an apprentice! Please try again
                when you want to be  an apprentice!
              </p>

              <button
                onClick={() =>
                  this.setState({ hasAnsweredIsApprentice: false })
                }
              >
                Restart
              </button>
            </div>
          )
        }
      </div >
    );
  }
}

export default App;