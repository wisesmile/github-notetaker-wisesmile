import React from 'react';

/**
 * BackboneMixin - automatic binding and unbinding for react classes mirroring
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

export default function Home() {
  return (
    <h2 className="text-center">
      Search By Github Username Above
    </h2>
  );
}
