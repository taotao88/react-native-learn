import React, { Component } from 'react';
import {
  ListView,       // Renders a list
  RefreshControl  // Refreshes the list on pull down
} from 'react-native';
import Row from './Row';
import data2 from './data2';

export default class List extends Component {

  /**
   * Store the data for ListView
   */
  state = {
    // ListView DataSource object
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    // Used for RefreshControl
    isRefreshing: false,
  }

  /**
   * Call _fetchData after component has been mounted
   */
  componentDidMount() {
    // Fetch Data
    this._fetchData();
  }

  /**
   * Prepare demo data for ListView component
   */
  _fetchData = () => {
    // Data is being refreshed
    this.setState({ isRefreshing: true });
    this.setState({
      // Fill up DataSource with demo data
      dataSource: this.state.dataSource.cloneWithRows(data2),
      // Data has been refreshed by now
      isRefreshing: false,
    });
  }

  /**
   * Render a row
   */
  _renderRow = (question) => {
    return (
      <Row
        // Pass question object
        question={question}
        // Pass a function to handle row presses
        onPress={()=>{
          // Navigate to a separate question detail screen
          this.props.navigator.push({
            name: 'question',
            question: question,
          });
        }}
      />
    );
  }

  /**
   * Renders the list
   */
  render() {
    return (
      <ListView
        // Data source from state
        dataSource={this.state.dataSource}
        // Row renderer method
        renderRow={this._renderRow}
        // Refresh the list on pull down
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._fetchData}
          />
        }
      />
    );
  }
}
