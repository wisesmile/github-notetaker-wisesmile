import React  from 'react';
import Router from 'react-router';

/**
 * SearchGithub - automatic binding and unbinding for react classes mirroring
 * backbone models and views. Example:
 *
 *     var Model = Backbone.Model.extend({ ... });
 *     var Collection = Backbone.Collection.extend({ ... });
 *
 *     var Example = React.createClass({
 *         mixins: [BackboneMixin],
 *         getBackboneModels: function() {
 *             return [this.model, this.collection];
 *         }
 *     });
 *
 * List the models and collections that your class uses and it'll be
 * automatically `forceUpdate`-ed when they change.
 *
 * This binds *and* unbinds the events.
 */

class SearchGithub extends React.Component {
  getRef(ref) {
    this.usernameRef = ref;
  }
  /**
   * handle submit form event
   */
  handleSubmit() {
    const username = this.usernameRef.value;
    this.usernameRef.value = '';
    this.props.history.pushState(null, '/profile/' + username);
  }
  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={() => this.handleSubmit()}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    );
  }
} // end class

/**
 * propTypes
 * @property {string} history
 */
SearchGithub.PropTypes = {
  history: React.PropTypes.object.isRequired,
};

export default SearchGithub;
